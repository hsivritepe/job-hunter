'use client';

import Papa from 'papaparse';
import { useState } from 'react';

function ImportPage() {
    const [parsedData, setParsedData] = useState([]);
    const [importing, setImporting] = useState(false);
    const [notification, setNotification] = useState(null);

    const showNotification = (message, type = 'success') => {
        setNotification({ message, type });
        setTimeout(() => setNotification(null), 3000);
    };

    const isRowEmpty = (row) => {
        // Fields to ignore when checking for empty rows
        const ignoreFields = ['ID', 'Comp ID', 'key'];

        // Fields that should have meaningful data
        const meaningfulFields = [
            'Company',
            'Position',
            'Application link',
            'Resume link',
            'Cover Letter',
        ];

        // Check if any meaningful field has data
        return !meaningfulFields.some((field) => {
            const value = row[field];
            return value && value.toString().trim() !== '';
        });
    };

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            Papa.parse(file, {
                header: true,
                complete: (results) => {
                    console.log('Raw data from CSV:', results.data);
                    // Filter out empty entries
                    const filteredData = results.data.filter(
                        (row) => !isRowEmpty(row)
                    );
                    console.log(
                        'After filtering empty entries:',
                        filteredData
                    );
                    setParsedData(filteredData);
                    showNotification(
                        `Found ${filteredData.length} entries to import`
                    );
                },
                error: (error) => {
                    console.error('Error parsing CSV:', error);
                    showNotification(
                        'Error parsing CSV file',
                        'error'
                    );
                },
            });
        }
    };

    const handleImport = async () => {
        if (!parsedData || parsedData.length === 0) {
            showNotification('No data to import', 'error');
            return;
        }

        setImporting(true);
        console.log(
            'First 3 entries being sent to API:',
            parsedData.slice(0, 3)
        );
        console.log('First entry structure:', parsedData[0]);

        try {
            const response = await fetch('/api/imports', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ data: parsedData }),
            });

            console.log('Response status:', response.status);
            console.log(
                'Response headers:',
                Object.fromEntries(response.headers.entries())
            );

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Import failed');
            }

            const result = await response.json();
            console.log('API Response:', result);

            if (result.summary) {
                showNotification(
                    `Import completed: ${result.summary.companiesCreated} companies and ${result.summary.jobsImported} jobs imported`
                );
            } else {
                showNotification(
                    'Import completed but no summary provided',
                    'error'
                );
            }
        } catch (error) {
            console.error('Import error:', error);
            showNotification(
                error.message || 'Failed to import data',
                'error'
            );
        } finally {
            setImporting(false);
        }
    };

    return (
        <div className="container mx-auto p-4">
            {notification && (
                <div
                    className={`fixed top-4 right-4 p-4 rounded-md ${
                        notification.type === 'success'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-red-100 text-red-700'
                    }`}
                >
                    {notification.message}
                </div>
            )}
            <h1 className="text-2xl font-bold mb-4">Import Jobs</h1>
            <div className="mb-4">
                <input
                    type="file"
                    accept=".csv"
                    onChange={handleFileUpload}
                    className="block w-full text-sm text-gray-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:text-sm file:font-semibold
                        file:bg-blue-50 file:text-blue-700
                        hover:file:bg-blue-100"
                />
            </div>
            {parsedData.length > 0 && (
                <div className="mb-4">
                    <p className="text-sm text-gray-600">
                        Found {parsedData.length} entries to import
                    </p>
                    <button
                        onClick={handleImport}
                        disabled={importing}
                        className={`mt-2 px-4 py-2 rounded ${
                            importing
                                ? 'bg-gray-400 cursor-not-allowed'
                                : 'bg-blue-500 hover:bg-blue-600'
                        } text-white`}
                    >
                        {importing ? 'Importing...' : 'Import Data'}
                    </button>
                </div>
            )}
        </div>
    );
}

export default ImportPage;
