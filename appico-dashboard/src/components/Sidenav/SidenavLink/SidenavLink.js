import React, {useState} from 'react';
import {Link} from '@reach/router';
import PropTypes from 'prop-types';

import SvgIcon from '../../SvgIcon/SvgIcon';

const SidenavLink = props => {
    const [itemActive, setItemActive] = useState(false);
    const navItemClasses = `nav-item ${itemActive ? 'selected' : ''}`;

    const checkItemIsActive = (thisProps) => {
        if (thisProps.isCurrent || (thisProps.isPartiallyCurrent && thisProps.location.pathname.includes('/dashboard'))) {
            setItemActive(true);
        } else {
            setItemActive(false);
        }
    };

    return (
        <li className={navItemClasses}>
            <Link to={props.path}
                getProps={(thisProps) => checkItemIsActive(thisProps)
                }>
                <SvgIcon classname="nav-icon" icon={props.icon} />
                <span className="nav-text">{props.name}</span>
            </Link>
        </li>
    );
};

SidenavLink.propTypes = {
    path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
};

export default SidenavLink;