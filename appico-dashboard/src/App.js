import React, {useState} from 'react';
import {Router} from '@reach/router';

import Header from './components/Header/Header';
import Sidenav from './components/Sidenav/Sidenav';

// Pages
import PageDashboard from './Pages/PageDashboard/PageDashboard';
import PageChats from './Pages/PageChats/PageChats';
import PageMessages from './Pages/PageMessages/PageMessages';
import PageReports from './Pages/PageReports/PageReports';
import PageSettings from './Pages/PageSettings/PageSettings';
import Page404 from './Pages/Page404/Page404';

import './App.css';

function App() {
  // State
    const [collapsedSidebar, setCollapsedSidebar] = useState(true);


    // Global css classes
    const navClasses = [];
    if (collapsedSidebar) navClasses.push('sidebar-collapsed');

    // Header navigation object
    const headerNav = [
        {name: 'Overview', path: '/'},
        {name: 'Campaigns', path: 'dashboard/campaigns', state: {sectionTitle: 'Data Campaigns'}},
        {name: 'Analytics', path: 'dashboard/analitycs', state: {sectionTitle: 'Data Analytics'}}
    ];

    // Sidebar navigation object
    const sidebarNav = [
        {name: 'Dashboard', icon: 'dashboard', path: '/'},
        {name: 'Chats', icon: 'chats', path: 'chats'},
        {name: 'Reports', icon: 'reports', path: 'reports'},
        {name: 'Messages', icon: 'messages', path: 'messages'},
        {name: 'Settings', icon: 'settings', path: 'settings'}
    ];


    const collapseSidebarHandler = () => setCollapsedSidebar(!collapsedSidebar);


    return (
        <div className={navClasses.join(' ')}>
            <Header nav={headerNav} premium={true} />
            <Sidenav nav={sidebarNav} toggle={true} togglecollapse={collapseSidebarHandler} />

            <Router>
                <PageDashboard path="/" />
                <PageDashboard path="dashboard/*" />
                <PageChats path="chats" />
                <PageMessages path="messages" />
                <PageReports path="reports" />
                <PageSettings path="settings" />
                <Page404 default />
            </Router>
        </div>
    );
}

export default App;
