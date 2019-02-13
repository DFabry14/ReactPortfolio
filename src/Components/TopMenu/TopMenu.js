import React from 'react';
import { Navbar, NavItem } from 'react-materialize'
import './TopMenu.css';

const TopMenu = () => (
    <div className="style">
        <Navbar brand='Dan Fabry - Web Developer' left>
            <NavItem target="_blank" href='https://www.linkedin.com/in/dan-fabry/'>LinkedIn</NavItem>
            <NavItem target="_blank" href='https://github.com/DFabry14'>GitHub</NavItem>
            <NavItem target="_blank" href='mailto:dan@DanFabry.tech'>Contact</NavItem>
        </Navbar>
    </div>
);

export default TopMenu;