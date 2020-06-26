import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const AppNavbar = () => { 
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <Navbar color="dark" dark expand="md">
                <NavbarBrand href="/dashboard">Covid Tracker</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/dashboard">Dashboard</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/doctor">Doctor</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/manager">Manager</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default AppNavbar;