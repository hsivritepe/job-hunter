'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { signIn, signOut, useSession } from 'next-auth/react';
import { MenuUnfoldOutlined } from '@ant-design/icons';
import { Drawer } from 'antd';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    const { data: session, status } = useSession();

    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    if (!session) {
        return (
            <header>
                <nav
                    className="flex items-center justify-between mx-auto left-0 right-0 w-auto h-14 border-solid border-b-2 border-black"
                    style={{ zIndex: 9 }}
                >
                    <Link className="font-bold" href={'/'}>
                        Job Hunter
                    </Link>
                </nav>
            </header>
        );
    }
    return (
        <header>
            <nav
                className="flex items-center justify-between mx-auto left-0 right-0 w-auto h-14 border-solid border-b-2 border-black"
                style={{ zIndex: 9 }}
            >
                <Link className="font-bold" href={'/'}>
                    Job Hunter
                </Link>

                <Link
                    href={'/tilt/jobs'}
                    className="hidden sm:flex bg-blue-200 hover:bg-blue-500 hover:text-white px-4 py-2 rounded-lg"
                >
                    Jobs
                </Link>
                <Link
                    href={'/tilt/companies'}
                    className="hidden sm:flex bg-orange-200 hover:bg-orange-500 hover:text-white px-4 py-2 rounded-lg"
                >
                    Companies
                </Link>
                <Link
                    href={'/tilt/actions'}
                    className="hidden sm:flex bg-green-200 hover:bg-green-500 hover:text-white px-4 py-2 rounded-lg"
                >
                    Actions
                </Link>
                <div className="hidden sm:flex sm:flex-col sm:items-center">
                    {session ? (
                        <div className="flex items-center">
                            <hr />
                            <br />
                            <Image
                                src={session?.session.user.image}
                                width={48}
                                height={48}
                                className="rounded-full"
                                alt="Profile Picture"
                            />
                            <Link
                                href={'/api/auth/signout'}
                                className="text-xs bg-black text-white px-2 py-1 rounded-lg"
                                onClick={(e) => {
                                    e.defaultPrevented();
                                    signOut();
                                }}
                            >
                                Sign
                                <br />
                                Out
                            </Link>
                        </div>
                    ) : (
                        <div className="flex items-center">
                            <hr />
                            <br />
                            <Link
                                href={'/api/auth/signin'}
                                className="bg-black text-white px-4 py-2 rounded-lg"
                                onClick={(e) => {
                                    e.defaultPrevented();
                                    signIn();
                                }}
                            >
                                Sign IN
                            </Link>
                        </div>
                    )}
                </div>

                <section className="sm:hidden">
                    <MenuUnfoldOutlined
                        type="primary"
                        onClick={showDrawer}
                    />

                    <Drawer
                        title="Menu"
                        placement="right"
                        closable={false}
                        onClose={onClose}
                        open={open}
                        width={250}
                    >
                        <section className="flex flex-col items-start justify-center gap-4">
                            <Link
                                href={'/tilt/jobs'}
                                onClick={onClose}
                                className="bg-blue-200 py-2 px-4 rounded-lg"
                            >
                                Jobs
                            </Link>
                            <Link
                                href={'/tilt/companies'}
                                onClick={onClose}
                                className="bg-orange-200 py-2 px-4 rounded-lg"
                            >
                                Companies
                            </Link>
                            <Link
                                href={'/tilt/actions'}
                                onClick={onClose}
                                className="bg-green-200 py-2 px-4 rounded-lg"
                            >
                                Actions
                            </Link>
                            <div className="w-100 flex justify-center flex-col">
                                <hr />
                                <br />
                                <Image
                                    src={session?.session.user.image}
                                    width={64}
                                    height={64}
                                    className="rounded-full mb-4"
                                    alt="Profile Picture"
                                />
                                <Link
                                    href={''}
                                    className="bg-black text-white px-4 py-2 rounded-lg ml-2"
                                    onClick={() => signOut()}
                                >
                                    Sign Out
                                </Link>
                            </div>
                        </section>
                    </Drawer>
                </section>
            </nav>
        </header>
    );
}
