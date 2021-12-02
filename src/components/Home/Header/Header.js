import React, {useState} from 'react';
 import { Button, Container, Dropdown, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <>
            <Navbar  expand="lg" bg="dark" variant="dark" fixed="top">
            <Container>
                <Navbar.Brand className="items">
                    <h3 style={{color:'White'}}><span className="text-info">Sanjida</span> Eshrat</h3>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                <NavLink to="/home" className="items"><li> Home</li></NavLink>
                {/* <NavLink to="/about" className="items"><li> About Me</li></NavLink> */}
                <NavLink to="/contact" className="items"><li> Contact Me</li></NavLink>               
                </Nav>
                </Navbar.Collapse>   
            </Container>
            </Navbar>
        </>
    );
};

export default Header;