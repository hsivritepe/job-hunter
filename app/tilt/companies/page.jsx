'use client';
import MainTitle from '@/components/MainTitle/page';
import CompanyTableList from '@/components/CompanyTableList/page';

export default function Jobs() {
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
