'use client';

import axios from 'axios';
import { useState, useEffect } from 'react';
import { GetCompanyDetails } from '@/app/helpers/helpers';
import { Descriptions, Breadcrumb } from 'antd';
import Link from 'next/link';
import MyBreadcrumb from '@/components/Breadcrumb';
import JobTableList from '@/components/JobTableList';
import withAuth from '@/app/helpers/withAuth';

function CompanyDetails({ params }) {
    const [companyData, setCompanyData] = useState(null);

    useEffect(() => {
        const getCompanyDetails = async () => {
            try {
                const data = await axios.get(
                    `/api/companies/${params.id}`
                );
                setCompanyData(data.data.company);
            } catch (error) {
                console.error(
                    'Error fetching company details:',
                    error
                );
            }
        };
        getCompanyDetails();
    }, []);

    return (
        <div>
            {companyData?.companyName && (
                <>
                    {/* <Breadcrumb className="pt-4 pb-8">
                        <Breadcrumb.Item>
                            <Link href="/">Home</Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <Link
                                href="/tilt/companies"
                                onClick={() => history.back()}
                            >
                                Companies
                            </Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            {companyData.companyName}
                        </Breadcrumb.Item>
                    </Breadcrumb> */}
                    <MyBreadcrumb
                        items={[
                            {
                                name: 'Home',
                                href: '/',
                            },
                            {
                                name: 'Companies',
                                href: '/tilt/companies',
                                onClick: () => history.back(),
                            },
                            {
                                name: companyData.companyName,
                            },
                        ]}
                    />

                    <Descriptions
                        title="Company Details"
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
                        <Descriptions.Item label="Company Name">
                            {companyData.companyName || 'N/A'}
                        </Descriptions.Item>
                        <Descriptions.Item label="Company Website">
                            {companyData.company_website || 'N/A'}
                        </Descriptions.Item>
                    </Descriptions>
                </>
            )}
            <br />
            <br />

            <JobTableList companyId={params.id} />
        </div>
    );
}

export default withAuth(CompanyDetails);
