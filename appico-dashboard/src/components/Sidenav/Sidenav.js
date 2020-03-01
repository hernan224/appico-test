import React from 'react';
import PropTypes from 'prop-types';

import SidenavLink from './SidenavLink/SidenavLink';
import SvgIcon from '../SvgIcon/SvgIcon';

import './Sidenav.css';

const Sidenav = (props) => {
    // Navigation list
    let navigation = null;
    if (props.nav) {
        const navItems = props.nav.map((item, index) => (
            <SidenavLink key={index}
                        path={item.path}
                        icon={item.icon}
                        name={item.name} />
        ));

        navigation = <ul className="vertical-nav nav-collapsed">{navItems}</ul>
    }

    // Toggle collapse sidenav btn
    let toggleBtn = null;
    if (props.toggle) {
        toggleBtn = <button className="toggle-collapse" onClick={props.togglecollapse}><SvgIcon icon="leftArrow" /></button>;
    }

    return (
        <nav className="dashboard-nav">
            {navigation}
            {toggleBtn}
        </nav>
    );
}

Sidenav.propTypes = {
    toggle: PropTypes.bool,
    togglecollapse: PropTypes.func,
    nav: PropTypes.arrayOf(
        PropTypes.shape({
            path: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            icon: PropTypes.string.isRequired
        })
    ).isRequired
};

export default Sidenav;