'use client';

import { Switch, Table, Input } from 'antd';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';

import { SearchOutlined, CalendarOutlined } from '@ant-design/icons';
const { Search } = Input;

export default function JobTableList() {
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const [jobs, setJobs] = useState([]);
    const [filteredJobs, setFilteredJobs] = useState([]);

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            width: '5%',
            ellipsis: true,
            responsive: ['sm'],
            render: (name, record) => (
                <Link
                    href={`/tilt/jobs/${record.id}`}
                    className="text-blue-800 font-medium"
                >
                    {name}
                </Link>
            ),
            sorter: (a, b) => a.id - b.id,
        },
        {
            title: 'Company',
            dataIndex: 'company_name',
            key: 'company_name',
            ellipsis: true,
            responsive: ['sm'],
            render: (name, record) => {
                <Link
                    href={`/tilt/companies/${record.company_id}`}
                    className="text-blue-800 font-medium"
                >
                    {name}
                </Link>;
            },
            sorter: (a, b) =>
                a.company_name.localeCompare(b.company_name),
        },
        {
            title: 'Job Title',
            dataIndex: 'job_title',
            key: 'job_title',
            ellipsis: true,
            responsive: ['sm'],
            sorter: (a, b) => a.job_title.localeCompare(b.job_title),
        },
    ];

    const getJobs = () => {
        axios
            .get('/api/jobs')
            .then((response) => {
                setJobs(response.data.jobs);
                setFilteredJobs(response.data.jobs);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        getJobs();
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
        onFilterDropdownVisibleChange: (visible) => {
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
            <div className="text-right pr-8 pb-4">
                <span className="font-semibold">Total:</span>{' '}
                {filteredJobs.length} jobs
            </div>
            <Table
                columns={columnsWithSearch}
                dataSource={filteredJobs}
                scroll={{ x: true }}
                summary={() => <Table.Summary></Table.Summary>}
                sticky
                className="p-6 bg-white"
            />
        </>
    );
}