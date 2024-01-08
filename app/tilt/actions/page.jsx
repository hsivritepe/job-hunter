'use client';
import MainTitle from '@/components/MainTitle/page';
import ActionTableList from '@/components/ActionTableList/page';

export default function Actions() {
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
