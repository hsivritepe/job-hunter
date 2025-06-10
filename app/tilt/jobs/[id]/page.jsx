'use client';

import axios from 'axios';
import { useState, useEffect } from 'react';
import { Descriptions } from 'antd';
import Link from 'next/link';
import JobActionsTableList from '@/components/JobActionsTableList';
import MyBreadcrumb from '@/components/Breadcrumb';
import withAuth from '@/app/helpers/withAuth';

function JobDetails({ params }) {
    const [jobData, setJobData] = useState(null);
    const jobId = params.id;

    useEffect(() => {
        const getJobDetails = async () => {
            try {
                const data = await axios.get(`/api/jobs/${jobId}`);
                setJobData(data.data.job);
            } catch (error) {
                console.error('Error fetching job details:', error);
            }
        };
        getJobDetails();
    }, [jobId]);

    if (!jobData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {jobData?.jobTitle && (
                <>
                    <MyBreadcrumb
                        items={[
                            {
                                name: 'Home',
                                href: '/',
                            },
                            {
                                name: 'Jobs',
                                href: '/tilt/jobs',
                                onClick: () => history.back(),
                            },
                            {
                                name: jobData.jobTitle,
                            },
                        ]}
                    />

                    <Descriptions
                        title="Job Details"
                        labelStyle={{
                            fontWeight: 'bold',
                            border: '2px dashed lightgray',
                        }}
                        contentStyle={{
                            border: '2px dashed lightgray',
                        }}
                        bordered
                        column={{
                            xxl: 2,
                            xl: 2,
                            lg: 2,
                            md: 2,
                            sm: 2,
                            xs: 1,
                        }}
                    >
                        <Descriptions.Item label="Job Title">
                            {jobData.jobTitle || 'N/A'}
                        </Descriptions.Item>
                        <Descriptions.Item label="Company Name">
                            {jobData.companies.companyName || 'N/A'}
                        </Descriptions.Item>
                        <Descriptions.Item label="Job Link">
                            {jobData.jobLink ? (
                                <Link
                                    className="colored"
                                    href={jobData.jobLink}
                                    target="_blank"
                                >
                                    Job link
                                </Link>
                            ) : (
                                <span>N/A</span>
                            )}
                        </Descriptions.Item>
                        <Descriptions.Item label="Resume Link">
                            {jobData.resumeLink ? (
                                <Link
                                    className="colored"
                                    href={jobData.resumeLink}
                                    target="_blank"
                                >
                                    Resume link
                                </Link>
                            ) : (
                                <span>N/A</span>
                            )}
                        </Descriptions.Item>
                        <Descriptions.Item label="Cover Link">
                            {jobData.coverLink ? (
                                <Link
                                    className="colored"
                                    href={jobData.coverLink}
                                    target="_blank"
                                >
                                    Cover link
                                </Link>
                            ) : (
                                <span>N/A</span>
                            )}
                        </Descriptions.Item>
                        <Descriptions.Item label="Work Environment">
                            {jobData.jobWorkEnv || 'N/A'}
                        </Descriptions.Item>
                    </Descriptions>
                </>
            )}
            <br />
            <br />
            <JobActionsTableList jobId={jobId} />
        </div>
    );
}

export default withAuth(JobDetails);
