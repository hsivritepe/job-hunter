'use client';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

export default function Tilt() {
    const { data: session, status } = useSession();

    return (
        <div>
            <h1>Dashboard</h1>
            <p>Welcome {session?.user.name}</p>
            <Link href="/tilt/jobs" className="button mt-4">
                Add a Job
            </Link>
            <br />
            <Link
                href="/tilt/companies"
                className="button orange-button mt-4"
            >
                Add a Company
            </Link>
            <br />
            <Link
                href="/tilt/actions"
                className="button green-button mt-4"
            >
                Add an Action
            </Link>
        </div>
    );
}
