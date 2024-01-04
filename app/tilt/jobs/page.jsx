'use client';
import MainTitle from '@/components/MainTitle/page';
import JobTableList from '@/components/JobTableList/page';

export default function Jobs() {
    return (
        <div>
            <MainTitle title="Jobs" description="" button="" />
            <JobTableList companyId="all" />
        </div>
    );
}
