// 'use client';

// import Papa from 'papaparse';
// import { useState } from 'react';

// function ImportPage() {
//     // State to store parsed data
//     const [parsedData, setParsedData] = useState([]);

//     //State to store table Column name
//     const [tableRows, setTableRows] = useState([]);

//     //State to store the values
//     const [values, setValues] = useState([]);

//     const changeHandler = (event) => {
//         // Passing file data (event.target.files[0]) to parse using Papa.parse
//         Papa.parse(event.target.files[0], {
//             header: true,
//             skipEmptyLines: true,
//             complete: function (results) {
//                 const rowsArray = [];
//                 const valuesArray = [];

//                 // Iterating data to get column name and their values
//                 results.data.map((d) => {
//                     rowsArray.push(Object.keys(d));
//                     valuesArray.push(Object.values(d));
//                 });

//                 // Parsed Data Response in array format
//                 setParsedData(results.data);
//                 console.log(results.data);

//                 // Filtered Column Names
//                 setTableRows(rowsArray[0]);

//                 // Filtered Values
//                 setValues(valuesArray);
//             },
//         });
//     };

//     return (
//         <div>
//             {/* File Uploader */}
//             <input
//                 type="file"
//                 name="file"
//                 onChange={changeHandler}
//                 accept=".csv"
//                 style={{ display: 'block', margin: '10px auto' }}
//             />
//             <br />
//             <br />
//             {/* Table */}
//             <table>
//                 <thead>
//                     <tr>
//                         {tableRows.map((rows, index) => {
//                             return <th key={index}>{rows}</th>;
//                         })}
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {values.map((value, index) => {
//                         return (
//                             <tr key={index}>
//                                 {value.map((val, i) => {
//                                     return (
//                                         <td key={i}>
//                                             {tableRows[i]}-{val}
//                                         </td>
//                                     );
//                                 })}
//                             </tr>
//                         );
//                     })}
//                 </tbody>
//             </table>
//         </div>
//     );
// }

// export default ImportPage;

'use client';

import Papa from 'papaparse';
import { useEffect, useState } from 'react';

function ImportPage() {
    // State to store parsed data
    const [parsedData, setParsedData] = useState([]);

    const changeHandler = (event) => {
        // Passing file data (event.target.files[0]) to parse using Papa.parse
        Papa.parse(event.target.files[0], {
            header: true,
            skipEmptyLines: true,
            complete: function (results) {
                // Parsed Data Response in array format
                setParsedData(results.data);
            },
        });
    };

    useEffect(() => {
        if (parsedData.length > 0) {
            // parsedData.map(async (data) => {
            //     // Check if company is in the array
            //     const existingCompany = companies.find(
            //         (company) => company.name === data.company
            //     );
            //     if (!existingCompany) {
            //         try {
            //             const newCompany =
            //                 await prisma.Company.create({
            //                     data: {
            //                         companyName: data.company,
            //                     },
            //                 });
            //             companies.push(newCompany);
            //         } catch (error) {
            //             console.error(
            //                 'Error creating company:',
            //                 error
            //             );
            //         }
            //     }
            // });
        }
    }, [parsedData]);

    return (
        <div>
            {/* File Uploader */}
            <input
                type="file"
                name="file"
                onChange={changeHandler}
                accept=".csv"
                style={{ display: 'block', margin: '10px auto' }}
            />
            <br />
            <br />
            {parsedData.length > 0 &&
                parsedData.map((data, index) => {
                    return (
                        <div key={index}>
                            <p>{data.id}</p>
                            <p>{data.company}</p>
                            <p>{data.resume_link}</p>
                        </div>
                    );
                })}
        </div>
    );
}

export default ImportPage;
