'use client';

import { Switch, Table, Input } from 'antd';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';

import {
    SearchOutlined,
    CalendarOutlined,
    PlusCircleOutlined,
} from '@ant-design/icons';
const { Search } = Input;

export default function JobTableList(compId) {
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const [jobs, setJobs] = useState([]);
    const [filteredJobs, setFilteredJobs] = useState([]);

    let counter = 0;
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            width: '10%',
            ellipsis: true,
            responsive: ['sm'],
            render: (name, record) => (
                <Link
                    href={`/tilt/jobs/${record.id}`}
                    className="text-blue-800 font-medium"
                >
                    {++counter}
                </Link>
            ),
            sorter: (a, b) => a.id - b.id,
        },
        {
            title: 'Company Name',
            dataIndex: 'companies.companyName',
            key: 'companyName',
            ellipsis: true,
            responsive: ['md'],
            render: (name, record) => (
                <Link
                    href={`/tilt/companies/${record.companyId}`}
                    className="text-blue-800 font-medium"
                >
                    {record.companies.companyName || 'N/A'}
                </Link>
            ),
            sorter: (a, b) =>
                a.companies.companyName.localeCompare(
                    b.companies.companyName
                ),
        },
        {
            title: 'Job Title',
            dataIndex: 'jobTitle',
            key: 'jobTitle',
            ellipsis: true,
            responsive: ['xs', 'sm', 'md', 'lg', 'xl'],
            render: (name, record) => (
                <Link
                    href={`/tilt/jobs/${record.id}`}
                    className="text-blue-800 font-medium"
                >
                    {name}
                </Link>
            ),
            sorter: (a, b) => a.jobTitle.localeCompare(b.jobTitle),
        },
        {
            title: 'Date Applied',
            dataIndex: 'createdAt',
            key: 'createdAt',
            ellipsis: true,
            responsive: ['sm'],
            render: (date) => (
                <span>
                    {new Date(date).toLocaleString('en-US', {
                        dateStyle: 'medium',
                    })}
                </span>
            ),
            sorter: (a, b) => a.createdAt.localeCompare(b.createdAt),
        },
    ];

    const getJobs = async (theId) => {
        if (theId === 'all') {
            await axios
                .get('/api/jobs')
                .then((response) => {
                    setJobs(response.data.jobs);
                    setFilteredJobs(response.data.jobs);
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            await axios
                .get(`/api/companies/${theId}/jobs`)
                .then((response) => {
                    setJobs(response.data.job);
                    setFilteredJobs(response.data.job);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };

    useEffect(() => {
        getJobs(compId.companyId);
    }, []);

    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);

        const filteredJobs = jobs.filter((job) => {
            const targetValue = job[dataIndex];
            if (targetValue) {
                return targetValue
                    .toString()
                    .toLowerCase()
                    .includes(selectedKeys[0].toLowerCase());
            }
            return false;
        });

        setFilteredJobs(filteredJobs);
    };

    useEffect(() => {
        setFilteredJobs(jobs);
    }, [jobs]);

    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText('');
    };

    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({
            setSelectedKeys,
            selectedKeys,
            confirm,
            clearFilters,
        }) => (
            <div style={{ padding: 8 }}>
                <Search
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) =>
                        setSelectedKeys(
                            e.target.value ? [e.target.value] : []
                        )
                    }
                    onPressEnter={() =>
                        handleSearch(selectedKeys, confirm, dataIndex)
                    }
                    style={{
                        width: 188,
                        marginBottom: 8,
                        display: 'block',
                    }}
                />
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                    <button
                        type="button"
                        onClick={() => handleReset(clearFilters)}
                        style={{ width: 90 }}
                    >
                        Reset
                    </button>
                    <button
                        type="button"
                        onClick={() =>
                            handleSearch(
                                selectedKeys,
                                confirm,
                                dataIndex
                            )
                        }
                        style={{ width: 90 }}
                    >
                        Search
                    </button>
                </div>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined
                style={{ color: filtered ? '#1890ff' : undefined }}
            />
        ),
        onFilter: (value, record) =>
            record[dataIndex]
                ? record[dataIndex]
                      .toString()
                      .toLowerCase()
                      .includes(value.toLowerCase())
                : '',
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.select(), 100);
            }
        },
    });

    const columnsWithSearch = columns.map((col) => {
        if (col.dataIndex) {
            return {
                ...col,
                ...getColumnSearchProps(col.dataIndex),
                key: col.key, // Add the key prop here
            };
        }
        return col;
    });

    return (
        <>
            <div className="flex justify-end pr-8 pb-0">
                <span className="text-right">
                    Total:{' '}
                    <span className="font-semibold">
                        {filteredJobs?.length} job(s)
                    </span>
                </span>
            </div>
            <Table
                key={jobs.id}
                columns={columnsWithSearch}
                dataSource={filteredJobs}
                scroll={{ x: true }}
                summary={() => <Table.Summary></Table.Summary>}
                sticky
                className="py-2 sm:p-6 bg-white"
            />
        </>
    );
}
