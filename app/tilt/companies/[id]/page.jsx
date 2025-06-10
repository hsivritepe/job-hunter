import { Suspense } from 'react';
import { Descriptions, Breadcrumb } from 'antd';
import Link from 'next/link';
import JobTableList from '@/components/JobTableList';
import { getCompanyById } from '@/app/services/companyServices';
import { use } from 'react';

async function CompanyDetailsContent({ companyId }) {
    const company = await getCompanyById(companyId);

    return (
        <div className="p-4">
            <Breadcrumb
                items={[
                    {
                        title: <Link href="/tilt">Home</Link>,
                    },
                    {
                        title: (
                            <Link href="/tilt/companies">
                                Companies
                            </Link>
                        ),
                    },
                    {
                        title: company.json.message.companyName,
                    },
                ]}
            />
            <br />

            <Descriptions
                title="Company Details"
                bordered
                styles={{
                    label: { width: '200px' },
                    content: { width: '300px' },
                }}
            >
                <Descriptions.Item label="Company Name">
                    {company.json.message.companyName}
                </Descriptions.Item>
                <Descriptions.Item label="Company Website">
                    {company.json.message.companyWebsite}
                </Descriptions.Item>
                <Descriptions.Item label="Company Location">
                    {company.json.message.companyLocation}
                </Descriptions.Item>
                <Descriptions.Item label="Company Size">
                    {company.json.message.companySize}
                </Descriptions.Item>
                <Descriptions.Item label="Company Industry">
                    {company.json.message.companyIndustry}
                </Descriptions.Item>
                <Descriptions.Item label="Company Description">
                    {company.json.message.companyDescription}
                </Descriptions.Item>
            </Descriptions>
            <br />

            <JobTableList companyId={companyId} />
        </div>
    );
}

export default function CompanyDetails({ params }) {
    const companyId = use(params);

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <CompanyDetailsContent companyId={companyId.id} />
        </Suspense>
    );
}
