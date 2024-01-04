'use client';

import { Switch, Table, Input } from 'antd';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';

import { SearchOutlined, CalendarOutlined } from '@ant-design/icons';
const { Search } = Input;

export default function JobActionsTableList(props) {
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const [actions, setActions] = useState([]);
    const [filteredActions, setFilteredActions] = useState([]);

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            width: '10%',
            ellipsis: true,
            responsive: ['sm'],
            sorter: (a, b) => a.id - b.id,
        },
        {
            title: 'Action Title',
            dataIndex: 'action_type.action_type_title',
            key: 'action_type_title',
            ellipsis: true,
            responsive: ['xs'],
            render: (name, record) => (
                <span>
                    {record.action_type.action_type_title || 'N/A'}
                </span>
            ),
            sorter: (a, b) =>
                a.action_type.action_type_title.localeCompare(
                    b.action_type.action_type_title
                ),
        },
        {
            title: 'Date Applied',
            dataIndex: 'action_type.created_at',
            key: 'created_at',
            ellipsis: true,
            responsive: ['xs'],
            render: (date, record) => (
                <span>
                    {new Date(record.created_at).toLocaleString(
                        'en-US',
                        {
                            dateStyle: 'medium',
                        }
                    )}
                </span>
            ),
            sorter: (a, b) =>
                a.record.created_at.localeCompare(
                    b.record.created_at
                ),
        },
    ];

    const getActions = () => {
        axios
            .get(`/api/jobs/${props.jobId}/actions`)
            .then((response) => {
                setActions(response.data.job);
                setFilteredActions(response.data.job);
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
            <div className="flex justify-between pr-8 pb-0">
                <span className="text-left font-bold">
                    Action History
                </span>
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
