import React from 'react';

import SvgIcon from '../SvgIcon/SvgIcon';

import './Header.css';

const Header = (props) => {
    // Header navigation
    let navigation = null;
    if (props.nav) {
        const links = props.nav.map(link => <li className="nav-item"><a href={link.path}>{link.name}</a></li>);
        navigation = (
            <nav className="section-nav">
                <ul className="horizontal-nav">
                    {links}
                </ul>
                <button className="mobile-nav-toggle" onClick={props.togglemenu}>
                    <SvgIcon icon="ellipsis" />
                </button>
            </nav>
        );
    }

    // Premium button
    let premiumBtn = null;
    if (props.premium) {
        premiumBtn = <button className="btn btn-solid btn-primary dashboard-premium">Premium</button>;
    }

    return (
        <header className="dashboard-header">
            <a href="#" className="dashboard-logo logo-collapsed">
                <div className="logo-circle"></div>
                <h1 className="logo-text">Appico Dashboard</h1>
            </a>
            {navigation}
            {premiumBtn}
        </header>
    );
}

export default Header;