import { NextResponse } from 'next/server';
import db from '@/app/helpers/db';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/helpers/nextAuth';

function parseDate(dateStr) {
    if (!dateStr) return null;

    // Try different date formats
    const formats = [
        'YYYY-MM-DD',
        'MM/DD/YYYY',
        'DD/MM/YYYY',
        'YYYY/MM/DD',
    ];

    for (const format of formats) {
        try {
            const parts = dateStr.split(/[-\/]/);
            if (parts.length !== 3) continue;

            let year, month, day;

            if (format === 'YYYY-MM-DD' || format === 'YYYY/MM/DD') {
                [year, month, day] = parts;
            } else if (
                format === 'MM/DD/YYYY' ||
                format === 'DD/MM/YYYY'
            ) {
                if (format === 'MM/DD/YYYY') {
                    [month, day, year] = parts;
                } else {
                    [day, month, year] = parts;
                }
            }

            // Convert to numbers and validate
            year = parseInt(year);
            month = parseInt(month) - 1; // JavaScript months are 0-based
            day = parseInt(day);

            if (isNaN(year) || isNaN(month) || isNaN(day)) continue;

            // Ensure year is not in the future
            const currentYear = new Date().getFullYear();
            if (year > currentYear) {
                year = currentYear;
            }

            const date = new Date(year, month, day);

            // Validate the date
            if (
                date.getFullYear() === year &&
                date.getMonth() === month &&
                date.getDate() === day
            ) {
                return date;
            }
        } catch (e) {
            continue;
        }
    }

    console.error('Invalid date format:', dateStr);
    return null;
}

export async function POST(req) {
    try {
        const session = await getServerSession(authOptions);
        if (!session?.user?.id) {
            console.error('No session or user ID found');
            return NextResponse.json(
                { error: 'Authentication required.' },
                { status: 401 }
            );
        }

        // Get or create user
        let user = await db.user.findUnique({
            where: { id: session.user.id },
        });

        if (!user) {
            user = await db.user.create({
                data: {
                    id: session.user.id,
                    email: session.user.email,
                    name: session.user.name || session.user.email,
                },
            });
        }

        const { data } = await req.json();
        if (!Array.isArray(data) || data.length === 0) {
            console.error('No data provided or invalid data format');
            return NextResponse.json(
                { error: 'No data provided.' },
                { status: 400 }
            );
        }

        // First, ensure all required action types exist
        const requiredActionTypes = [
            'Apply to the job',
            'Get a response for the next step',
            'Send a follow up email',
        ];

        // Create any missing action types
        for (const actionTypeTitle of requiredActionTypes) {
            try {
                await db.actionType.create({
                    data: {
                        actionTypeTitle,
                        actionTypeDesc: `${actionTypeTitle} action type`,
                    },
                });
            } catch (error) {
                // If the action type already exists, that's fine
                if (error.code !== 'P2002') {
                    console.error(
                        `Error creating action type ${actionTypeTitle}:`,
                        error
                    );
                    throw error;
                }
            }
        }

        // Get all action types
        const actionTypes = await db.actionType.findMany();
        const actionTypeMap = {
            'Apply to the job': actionTypes.find(
                (t) => t.actionTypeTitle === 'Apply to the job'
            )?.id,
            'Get a response for the next step': actionTypes.find(
                (t) =>
                    t.actionTypeTitle ===
                    'Get a response for the next step'
            )?.id,
            'Send a follow up email': actionTypes.find(
                (t) => t.actionTypeTitle === 'Send a follow up email'
            )?.id,
        };

        let companiesCreated = 0;
        let jobsImported = 0;
        const companyCache = {};

        for (const row of data) {
            const companyName = row['Company']?.trim();
            if (!companyName) {
                continue;
            }

            // Get or create company
            let company = companyCache[companyName];
            if (!company) {
                try {
                    company = await db.company.upsert({
                        where: { companyName },
                        update: {},
                        create: { companyName },
                    });
                    if (!companyCache[companyName]) {
                        companiesCreated++;
                    }
                    companyCache[companyName] = company;
                } catch (error) {
                    console.error(
                        `Error creating/finding company ${companyName}:`,
                        error
                    );
                    continue;
                }
            }

            // Create job
            try {
                const jobData = {
                    jobTitle: row['Position'] || '',
                    jobLink: row['Application link'] || '',
                    resumeLink: row['Resume link'] || '',
                    coverLink: row['Cover Letter'] || '',
                    companyId: company.id,
                    userId: user.id,
                };

                // Verify all required fields are present
                if (!jobData.userId) {
                    throw new Error('User ID is required');
                }
                if (!jobData.companyId) {
                    throw new Error('Company ID is required');
                }

                const job = await db.job.create({
                    data: jobData,
                });

                jobsImported++;

                // Create application action if date exists
                if (row['Application Date']) {
                    const applicationDate = parseDate(
                        row['Application Date']
                    );
                    if (
                        applicationDate &&
                        actionTypeMap['Apply to the job']
                    ) {
                        try {
                            await db.action.create({
                                data: {
                                    userId: user.id,
                                    jobId: job.id,
                                    actionTypeId:
                                        actionTypeMap[
                                            'Apply to the job'
                                        ],
                                    createdAt: applicationDate,
                                },
                            });
                        } catch (error) {
                            console.error(
                                'Error creating application action:',
                                error
                            );
                        }
                    }
                }

                // Create response action if date exists
                if (row['Response Date']) {
                    const responseDate = parseDate(
                        row['Response Date']
                    );
                    if (
                        responseDate &&
                        actionTypeMap[
                            'Get a response for the next step'
                        ]
                    ) {
                        try {
                            await db.action.create({
                                data: {
                                    userId: user.id,
                                    jobId: job.id,
                                    actionTypeId:
                                        actionTypeMap[
                                            'Get a response for the next step'
                                        ],
                                    createdAt: responseDate,
                                },
                            });
                        } catch (error) {
                            console.error(
                                'Error creating response action:',
                                error
                            );
                        }
                    }
                }
            } catch (error) {
                console.error('Error creating job:', {
                    error: error.message,
                    errorCode: error.code,
                    company: companyName,
                    position: row['Position'],
                });
            }
        }

        return NextResponse.json({
            summary: {
                companiesCreated,
                jobsImported,
            },
        });
    } catch (error) {
        console.error('Import error:', error);
        return NextResponse.json(
            { error: `Import failed: ${error.message}` },
            { status: 500 }
        );
    }
}
