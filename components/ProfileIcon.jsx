// 'use client';

import { signIn, useSession, signOut } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Link from 'next/link';

export default function ProfileIcon() {
    const { data: session, status } = useSession();

    // const router = useRouter();

    // useEffect(() => {
    //     if (status === 'authenticated') {
    //         router.push('/tilt');
    //     } else {
    //         router.push('/login');
    //     }
    // }, [status]);

    if (status === 'authenticated') {
        return (
            <div className="w-100">
                <hr />
                <br />
                <Image
                    src={session.user.image}
                    width={32}
                    height={32}
                    className="rounded-full"
                    alt="Profile Picture"
                />
                <Link
                    href={''}
                    className="pt-1"
                    onClick={() => signOut()}
                >
                    Sign Out
                </Link>
            </div>
        );
    }
    // return <button onClick={() => signIn('github')}>Sign In</button>;
}
