'use client';

import { useRouter } from 'next/navigation';
import { signIn, useSession } from 'next-auth/react';
import { useEffect } from 'react';

export default function SignIn() {
    const { data: session } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (session) {
            router.push('/tilt');
        }
    }, [session]);

    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen -m-16">
                <h1>Login to get started</h1>
                <button
                    onClick={() => signIn('github')}
                    className="w-1/4 mt-4 bg-slate-800 text-white px-6 py-3 rounded-lg"
                >
                    Sign In with GitHub
                </button>
                {/* <button
                    onClick={() => signIn('facebook')}
                    className="w-1/4 mt-4 bg-blue-500 text-white px-6 py-3 rounded-lg"
                >
                    Sign In with Facebook
                </button> */}
            </div>
        </>
    );
}
