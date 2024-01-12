'use client';

import MainTitle from '@/components/MainTitle';
import JobTableList from '@/components/JobTableList';
import withAuth from '@/app/helpers/withAuth';

function Jobs() {
    return (
        <div>
            <MainTitle
                title="Jobs"
                description=""
                button="test"
                buttonLink="testlink"
                buttonText="Add Job"
                buttonColor="blue"
            />
            <JobTableList companyId="all" />
        </div>
    );
}

export default withAuth(Jobs);
