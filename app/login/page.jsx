'use client';

import LoginButton from '../../components/LoginButton';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default function LoginPage() {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === 'authenticated') {
            const getUser = async () => {
                const user = await prisma.user.findUnique({
                    where: {
                        email: session.user.email,
                    },
                });
                if (!user) {
                    await prisma.user.create({
                        data: {
                            email: session.user.email,
                            name: session.user.name,
                        },
                    });
                }
            };
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
