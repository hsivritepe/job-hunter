'use client';

import CompanyTableList from '@/components/CompanyTableList';
import MainTitle from '@/components/MainTitle';
import withAuth from '@/app/helpers/withAuth';

function Companies() {
    return (
        <div>
            <MainTitle
                title="Companies"
                description=""
                button="test"
                buttonLink="testlink"
                buttonText="Add Company"
                buttonColor="orange"
            />
            <CompanyTableList />
        </div>
    );
}

export default withAuth(Companies);
