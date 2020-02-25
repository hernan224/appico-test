import React, {useState} from 'react';

import Header from './components/Header/Header';
import Sidenav from './components/Sidenav/Sidenav';
import PageDashboard from './Pages/PageDashboard/PageDashboard';

import './App.css';

function App() {
  // State
    const [collapsedSidebar, setCollapsedSidebar] = useState(true);
    const [mobileMenuVisible, setMobileMenuvisible] = useState(false);

    // Global css classes
    const navClasses = [];
    if (collapsedSidebar) navClasses.push('sidebar-collapsed');
    if (mobileMenuVisible) navClasses.push('mobile-nav-visible');

    // Header navigation object
    const headerNav = [
        {name: 'Overview', path: '#'},
        {name: 'Campaigns', path: '#'},
        {name: 'Analytics', path: '#'}
    ];

    // Sidebar navigation object
    const sidebarNav = [
        {name: 'Dashboard', icon: 'dashboard', path: '#'},
        {name: 'Chats', icon: 'chats', path: '#'},
        {name: 'Reports', icon: 'reports', path: '#'},
        {name: 'Messages', icon: 'messages', path: '#'},
        {name: 'Settings', icon: 'settings', path: '#'}
    ];


    const collapseSidebarHandler = () => setCollapsedSidebar(!collapsedSidebar);
    const showMobileNavHandler = () => setMobileMenuvisible(!mobileMenuVisible);

    return (
        <div className={navClasses.join(' ')}>
            <Header nav={headerNav} premium={true} togglemenu={showMobileNavHandler} />
            <Sidenav nav={sidebarNav} toggle={true} togglecollapse={collapseSidebarHandler} />
            <PageDashboard />
        </div>
    );
}

export default App;
