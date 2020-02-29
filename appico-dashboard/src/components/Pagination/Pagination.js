import React from 'react';
import { useNavigate } from "@reach/router"
import PropTypes from 'prop-types';

const Pagination = props => {
    const navigate = useNavigate();
    // Calculate total pages
    const totalPages = Math.ceil(props.pagination.total / props.pagination.limit);
    // Calculate first item number, for current page
    const firstItemNumber = ((props.pagination.current - 1) * props.pagination.limit) + 1;
    // Calculate last item number, for current page
    const lastItemNumber = props.pagination.current * props.pagination.limit;

    // Create pagiantion buttons
    let pagBtns = null;
    if (totalPages === 1) {
        // Only one page
        pagBtns = <span className="label btn btn-solid btn-primary btn-small m-r-1 m-l-1">1</span>;
    } else {
        // Multiple pages
        pagBtns = [];
        for (let i = 1; i <= totalPages; i++ ) {
            const btn = (i === props.pagination.current)
                ? <span key={i} className="label btn btn-solid btn-primary btn-small m-r-1 m-l-1">{i}</span>
                : <button key={i} className="btn btn-lined btn-grey btn-small m-r-1 m-l-1" onClick={() => navigate(`?p=${i}`)}>{i}</button>;

            pagBtns.push(btn);
        }
    }


    return (
        <React.Fragment>
            <p className="section-data-view text-grey">Showing <span className="text-dark">{firstItemNumber}</span> to <span className="text-dark">{lastItemNumber}</span> of {props.pagination.total} elements</p>

            <div className="section-pagination text-grey flex-container flex-content-end flex-items-center">
                Page
                {pagBtns}
            </div>
        </React.Fragment>
    );
};

Pagination.propTypes = {
    pagiantion: PropTypes.objectOf({
        current: PropTypes.number,
        limit: PropTypes.number,
        total: PropTypes.number,
    })
};

export default Pagination;