'use client';

import LoginButton from '../../components/LoginButton';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function LoginPage() {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === 'authenticated') {
            router.push('/tilt');
        } else {
            router.push('/login');
        }
    }, [status]);

    return (
        <div className="flex flex-col items-center justify-center h-screen -m-16">
            <h1>Login to get started</h1>
            <LoginButton />
        </div>
    );
}
