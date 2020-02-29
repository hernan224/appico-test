import React from 'react';

const TableHeader = (props) => {

    // Create tr & th
    let headerTr = null;
    if (props.headers.length > 0) {
        const thList = props.headers.map((header, index) => {
            if (!header) return null;
            return <th key={index}>{header}</th>;
        });

        headerTr = <tr>{thList}</tr>;
    }


    return <thead>{headerTr}</thead>;
};

export default TableHeader;