import React from 'react';

import TableHeader from './TableHeader/TableHeader';
import TableRow from './TableRow/TableRow';

import './DashboardTable.css';

const DashboardTable = (props) => {

    // Set table headers list
    const tableHeaders = Object.keys(props.data[0]).map(header => {
        if (header === 'id') return null;
        if (header === 'phone') return 'Phone number';
        // String capitalized
        return header.charAt(0).toUpperCase() + header.slice(1);
    });

    // Set table rows
    const tableRowsList = props.data.map(rowData => <TableRow key={rowData.id} data={rowData} />);


    return (
        <table className="dashboard-table table-stripless">
            <TableHeader headers={tableHeaders} />
            <tbody>
                {tableRowsList}
            </tbody>
        </table>
    );
};

export default DashboardTable;