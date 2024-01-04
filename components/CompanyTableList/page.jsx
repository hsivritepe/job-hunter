'use client';

import { Switch, Table, Input } from 'antd';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';

import { SearchOutlined, CalendarOutlined } from '@ant-design/icons';
const { Search } = Input;

export default function CompanyTableList() {
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const [companies, setCompanies] = useState([]);
    const [filteredCompanies, setFilteredCompanies] = useState([]);

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
                    href={`/tilt/companies/${record.id}`}
                    className="text-blue-800 font-medium"
                >
                    {name}
                </Link>
            ),
            sorter: (a, b) => a.id - b.id,
        },
        {
            title: 'Company Name',
            dataIndex: 'companies.company_name',
            key: 'company_name',
            ellipsis: true,
            responsive: ['xs'],
            render: (name, record) => (
                <Link
                    href={`/tilt/companies/${record.id}`}
                    className="text-blue-800 font-medium"
                >
                    {record.company_name || 'N/A'}
                </Link>
            ),
            sorter: (a, b) =>
                a.companies.company_name.localeCompare(
                    b.companies.company_name
                ),
        },
        {
            title: 'Date Applied',
            dataIndex: 'created_at',
            key: 'created_at',
            ellipsis: true,
            responsive: ['xs'],
            render: (date) => (
                <span>
                    {new Date(date).toLocaleString('en-US', {
                        dateStyle: 'medium',
                    })}
                </span>
            ),
            sorter: (a, b) =>
                a.created_at.localeCompare(b.created_at),
        },
    ];

    const getCompanies = () => {
        axios
            .get('/api/companies')
            .then((response) => {
                setCompanies(response.data.companies);
                setFilteredCompanies(response.data.companies);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        getCompanies();
    }, []);

    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);

        const filteredCompanies = companies.filter((company) => {
            const targetValue = company[dataIndex];
            if (targetValue) {
                return targetValue
                    .toString()
                    .toLowerCase()
                    .includes(selectedKeys[0].toLowerCase());
            }
            return false;
        });

        setFilteredCompanies(filteredCompanies);
    };

    useEffect(() => {
        setFilteredCompanies(companies);
    }, [companies]);

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
            <div className="text-right pr-8 pb-4">
                <span className="font-semibold">Total:</span>{' '}
                {filteredCompanies.length} companies
            </div>
            <Table
                columns={columnsWithSearch}
                dataSource={filteredCompanies}
                scroll={{ x: true }}
                summary={() => <Table.Summary></Table.Summary>}
                sticky
                className="py-2 sm:p-6 bg-white"
            />
        </>
    );
}
