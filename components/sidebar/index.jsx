import React from 'react';
import Logo from './logo';
import Groups from './groups';
import UserSettings from './userSettings';
import './styles.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="content">
                <Logo />
                <Groups />
            </div>
            <UserSettings />
        </div>
    )
}

export default Sidebar;