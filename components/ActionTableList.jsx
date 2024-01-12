'use client';

import { Switch, Table, Input } from 'antd';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';

import { SearchOutlined, CalendarOutlined } from '@ant-design/icons';
const { Search } = Input;

export default function ActionTableList(jobId) {
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const [actions, setActions] = useState([]);
    const [filteredActions, setFilteredActions] = useState([]);

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
                    href={`/tilt/actions/${record.id}`}
                    className="text-blue-800 font-medium"
                >
                    {++counter}
                </Link>
            ),
            sorter: (a, b) => a.id - b.id,
        },
        {
            title: 'Action Title',
            dataIndex: 'actionTypes.actionTypeTitle',
            key: 'actionTypeTitle',
            ellipsis: true,
            responsive: ['xs', 'sm'],
            render: (name, record) => (
                <span>
                    {record.actionTypes.actionTypeTitle || 'N/A'}
                </span>
            ),
            sorter: (a, b) =>
                a.actionTypes.actionTypeTitle.localeCompare(
                    b.actionTypes.actionTypeTitle
                ),
        },
        {
            title: 'Job Title',
            dataIndex: 'job.jobTitle',
            key: 'jobTitle',
            ellipsis: true,
            responsive: ['xs', 'sm'],
            render: (name, record) => (
                <Link
                    href={`/tilt/jobs/${record.id}`}
                    className="text-blue-800 font-medium"
                >
                    {record.job.jobTitle}
                </Link>
            ),
            sorter: (a, b) =>
                a.job.jobTitle.localeCompare(b.job.jobTitle),
        },
        {
            title: 'Date Applied',
            dataIndex: 'actionTypes.createdAt',
            key: 'createdAt',
            ellipsis: true,
            responsive: ['sm'],
            render: (date, record) => (
                <span>
                    {new Date(record.createdAt).toLocaleString(
                        'en-US',
                        {
                            dateStyle: 'medium',
                        }
                    )}
                </span>
            ),
            sorter: (a, b) =>
                a.record.createdAt.localeCompare(b.record.createdAt),
        },
    ];

    const getActions = () => {
        axios
            .get(`/api/actions`)
            .then((response) => {
                console.log(response.data.actions);
                setActions(response.data.actions);
                setFilteredActions(response.data.actions);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        getActions();
    }, []);

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
                        {filteredActions.length} action(s)
                    </span>
                </span>
            </div>
            <Table
                key={actions.id}
                columns={columnsWithSearch}
                dataSource={filteredActions}
                scroll={{ x: true }}
                summary={() => <Table.Summary></Table.Summary>}
                sticky
                className="py-2 sm:p-6 bg-white"
            />
        </>
    );
}
