'use client';

import axios from 'axios';
import { useState, useEffect } from 'react';
import MainTitle from '@/components/MainTitle/page';
import { GetJobDetails } from '@/app/helpers/helpers';
import { Descriptions, Breadcrumb } from 'antd';
import Link from 'next/link';
import JobActionsTableList from '@/components/JobActionsTableList/page';
import MyBreadcrumb from '@/components/Breadcrumb';

export default function JobDetails({ params }) {
    const [jobData, setJobData] = useState(null);

    useEffect(() => {
        const getJobDetails = async () => {
            try {
                const data = await axios.get(
                    `/api/jobs/${params.id}`
                );
                setJobData(data.data.job);
            } catch (error) {
                console.error('Error fetching job details:', error);
            }
        };
        getJobDetails();
    }, []);

    return (
        <div>
            {jobData?.job_title && (
                <>
                    {/* <Breadcrumb className="pt-4 pb-8">
                        <Breadcrumb.Item>
                            <Link href="/">Home</Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <Link
                                href="/tilt/jobs"
                                onClick={() => history.back()}
                            >
                                Jobs
                            </Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            {jobData.job_title}
                        </Breadcrumb.Item>
                    </Breadcrumb> */}
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
                                name: jobData.job_title,
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
                            {jobData.job_title || 'N/A'}
                        </Descriptions.Item>
                        <Descriptions.Item label="Company Name">
                            {jobData.company.company_name || 'N/A'}
                        </Descriptions.Item>
                        <Descriptions.Item label="Job Link">
                            {jobData.job_link ? (
                                <Link
                                    class="colored"
                                    href={jobData.job_link}
                                    target="_blank"
                                >
                                    Job link
                                </Link>
                            ) : (
                                <span>N/A</span>
                            )}
                        </Descriptions.Item>
                        <Descriptions.Item label="Resume Link">
                            {jobData.resume_link ? (
                                <Link
                                    class="colored"
                                    href={jobData.resume_link}
                                    target="_blank"
                                >
                                    Resume link
                                </Link>
                            ) : (
                                <span>N/A</span>
                            )}
                        </Descriptions.Item>
                        <Descriptions.Item label="Cover Link">
                            {jobData.cover_link ? (
                                <Link
                                    class="colored"
                                    href={jobData.cover_link}
                                    target="_blank"
                                >
                                    Cover link
                                </Link>
                            ) : (
                                <span>N/A</span>
                            )}
                        </Descriptions.Item>
                        <Descriptions.Item label="Work Environment">
                            {jobData.job_work_env || 'N/A'}
                        </Descriptions.Item>
                    </Descriptions>
                </>
            )}
            <br />
            <br />
            <JobActionsTableList jobId={params.id} />
        </div>
    );
}
