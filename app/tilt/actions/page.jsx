'use client';

import ActionTableList from '@/components/ActionTableList';
import MainTitle from '@/components/MainTitle';
import withAuth from '@/app/helpers/withAuth';

function Actions() {
    return (
        <div>
            <MainTitle
                title="Actions"
                description=""
                button="test"
                buttonLink="testlink"
                buttonText="Add Action"
                buttonColor="green"
            />
            <ActionTableList />
        </div>
    );
}

export default withAuth(Actions);
