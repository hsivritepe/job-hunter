'use client';

import axios from 'axios';
import { useState, useEffect } from 'react';
import MainTitle from '@/components/MainTitle/page';
import { GetJobDetails } from '@/app/helpers/helpers';
import { Descriptions } from 'antd';
import Link from 'next/link';

export default function JobDetails({ params }) {
    const [jobData, setJobData] = useState(null);

    useEffect(() => {
        const getJobDetails = async () => {
            try {
                const data = await axios.get(
                    `/api/jobs/${params.id}`
                );
                console.log(data.data.job);
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
                <Descriptions
                    title="Job Details"
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
                        {jobData.job_title}
                    </Descriptions.Item>
                    <Descriptions.Item label="Company Name">
                        {jobData.company.company_name}
                    </Descriptions.Item>
                    <Descriptions.Item label="Job Link">
                        <Link href={jobData.job_link} target="_blank">
                            Job link
                        </Link>
                    </Descriptions.Item>
                    <Descriptions.Item label="Resume Link">
                        <Link
                            href={jobData.resume_link}
                            target="_blank"
                        >
                            Resume link
                        </Link>
                    </Descriptions.Item>
                    <Descriptions.Item label="Cover Link">
                        <Link
                            href={jobData.cover_link}
                            target="_blank"
                        >
                            Cover link
                        </Link>
                    </Descriptions.Item>
                    <Descriptions.Item label="Work Environment">
                        {jobData.job_work_env}
                    </Descriptions.Item>
                </Descriptions>
            )}
        </div>
    );
}
