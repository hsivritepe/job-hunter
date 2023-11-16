import React from 'react';
import { Breadcrumb } from 'antd';
import Link from 'next/link';

export default function MyBreadcrumb(data) {
    return (
        <Breadcrumb className="pt-4 pb-8">
            {data.items.map((item) => (
                <Breadcrumb.Item key="item.name">
                    {item.href ? (
                        <Link
                            href={item.href}
                            onClick={
                                item.onClick ? item.onClick : null
                            }
                        >
                            {item.name}
                        </Link>
                    ) : (
                        item.name
                    )}
                </Breadcrumb.Item>
            ))}
        </Breadcrumb>
    );
}
