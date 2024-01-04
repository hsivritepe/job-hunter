'use client';

import Link from 'next/link';
import ProfileIcon from './ProfileIcon';
import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import { MenuUnfoldOutlined } from '@ant-design/icons';

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    return (
        <>
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
                <div className="hidden sm:flex">
                    <ProfileIcon />
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
                            <ProfileIcon className="border-t-black border-2" />
                        </section>
                    </Drawer>
                </section>
            </nav>
        </>
    );
}
