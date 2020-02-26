import React, {useEffect, useState, useRef} from 'react';

import SvgIcon from '../SvgIcon/SvgIcon';

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
        const links = props.nav.map((link, index) => <li key={index} className="nav-item"><a href={link.path}>{link.name}</a></li>);
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