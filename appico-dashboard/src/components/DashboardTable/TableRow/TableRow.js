import React from 'react';
import PropTypes from 'prop-types';

const TableRow = ({data}) => {
    const parsedHour = data.time.getHours().toString();
    const parsedMinutes = data.time.getMinutes().toString();

    const statusLabel = (data.status === 'open')
        ? <span className="label status-label btn btn-lined btn-grey btn-small">Open</span>
        : <span className="label status-label btn btn-solid btn-primary btn-small">Sent</span>;
    return (
        <tr>
            <td className="text-dark">{data.name}</td>
            <td>{data.email}</td>
            <td>{`${(parsedHour.length === 1) ? '0'+parsedHour : parsedHour}:${(parsedMinutes.length === 1) ? '0'+parsedMinutes : parsedMinutes}`}</td>
            <td>{data.phone}</td>
            <td>{data.city}</td>
            <td>{statusLabel}</td>
        </tr>
    );
};

TableRow.propTypes = {
    data : PropTypes.shape({
        id: PropTypes.number,
        status: PropTypes.string,
        name: PropTypes.string,
        email: PropTypes.string,
        phone: PropTypes.string,
        city: PropTypes.string,
        time: PropTypes.instanceOf(Date)
    })
};

export default TableRow;