'use client';
import MainTitle from '@/components/MainTitle/page';
import ActionTableList from '@/components/ActionTableList/page';

export default function Actions() {
    return (
        <div>
            <MainTitle
                title="Actions"
                description="All the actions"
                button=""
            />
            <ActionTableList />
        </div>
    );
}
