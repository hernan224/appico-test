import React, {useState} from 'react';
import {Link} from '@reach/router';
import PropTypes from 'prop-types';

const HeaderLink = props => {
    const [itemActive, setItemActive] = useState(false);
    const navItemClasses = `nav-item ${itemActive ? 'selected' : ''}`;

    return (
        <li className={navItemClasses}>
            <Link to={props.path}
                getProps={({isCurrent}) => setItemActive(isCurrent)}>{props.name}</Link>
        </li>
    );
};

HeaderLink.propTypes = {
    path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};

export default HeaderLink;