'use client';
import { useSession } from 'next-auth/react';
import { useState, useEffect } from 'react';
import MainTitle from '@/components/MainTitle/page';
import JobTableList from '@/components/JobTableList/page';

export default function Jobs() {
    const { data: session, status } = useSession();
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        async function fetchJobs() {
            const response = await fetch('/api/jobs');
            const data = await response.json();
            setJobs(data.jobs);
        }
        fetchJobs();
    }, []);

    return (
        <div>
            <MainTitle
                title="Jobs"
                description="All the jobs"
                button=""
            />
            <JobTableList />
        </div>
    );
}
