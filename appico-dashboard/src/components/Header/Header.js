import React, {useEffect, useState, useRef} from 'react';
import {Link} from '@reach/router';

import SvgIcon from '../SvgIcon/SvgIcon';
import HeaderLink from './HeaderLink/HeaderLink';

import './Header.css';

const Header = (props) => {
    // Set nav reference
    const navNode = useRef();

    // State
    const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

    // Set header classes
    const headerClasses = `dashboard-header ${mobileMenuVisible ? 'mobile-nav-visible' : ''}`;

    // Close mobile menu handler
    const closeMobileNavHandler = e => {
        if (navNode.current.contains(e.target)) {
          // inside click
            return;
        }
        // outside click
        setMobileMenuVisible(false);
    };

    // Close mobile menu clicking everywhere
    useEffect(() => {
        if (mobileMenuVisible) {
            document.addEventListener("mousedown", closeMobileNavHandler);
        } else {
            document.removeEventListener("mousedown", closeMobileNavHandler);
        }

        return () => {
            document.removeEventListener("mousedown", closeMobileNavHandler);
        };
    }, [mobileMenuVisible]);

    // Create navigation
    let navigation = null;
    if (props.nav) {
        const links = props.nav.map((link, index) => <HeaderLink key={index} path={link.path}  name={link.name}/>);

        navigation = (
            <nav className="section-nav" ref={navNode}>
                <ul className="horizontal-nav">
                    {links}
                </ul>
                <button className="mobile-nav-toggle" onClick={() => setMobileMenuVisible(!mobileMenuVisible)}>
                    <SvgIcon icon="ellipsis" />
                </button>
            </nav>
        );
    }

    // Set Premium button
    let premiumBtn = null;
    if (props.premium) {
        premiumBtn = <button className="btn btn-solid btn-primary dashboard-premium">Premium</button>;
    }

    return (
        <header className={headerClasses}>
            <Link to="/" className="dashboard-logo logo-collapsed">
                <div className="logo-circle"></div>
                <h1 className="logo-text">Appico Dashboard</h1>
            </Link>
            {navigation}
            {premiumBtn}
        </header>
    );
}

export default Header;