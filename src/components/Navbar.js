
import React, { useEffect, useState } from "react";
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import './Navbar.scss';

const NavBarComponent = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        if (menuOpen) {
            setDropdownOpen(false);
        }
    };

    const toggleDropdown = (isOpen) => {
        setDropdownOpen(isOpen);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
            setMenuOpen(false);
            setDropdownOpen(false);
        }
    };

    const handleLinkClick = () => {
        setMenuOpen(false);
        setDropdownOpen(false);
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <Navbar expand="lg" className={`navbar-custom ${menuOpen ? 'open' : ''}`}>
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        src="https://raw.githubusercontent.com/bellamoss77/react-photog-portfolio/d044eb6386bfb3acad1a399c0895ecf0c00ebf09/public/UPDATED-LOGO.svg" 
                        height="60"
                        className="d-inline-block align-top" alt="Logo" />
                </Navbar.Brand>
                <div className="hamburger" onClick={toggleMenu}>
                    <div className={`icon ${menuOpen ? 'open' : ''}`}></div>
                </div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleMenu} />
                <Navbar.Collapse className={menuOpen ? 'show' : ''} id="basic-navbar-nav">
                    <Nav className="ml-auto" id="nav-link-container">
                        <NavLink to="/" end className="nav-link-custom" activeClassName="active" onClick={handleLinkClick}>Home</NavLink>
                        <NavDropdown title={
                            <span className="galleries-title">
                                Galleries 
                                <FontAwesomeIcon icon={dropdownOpen ? faCaretUp : faCaretDown} className="dropdown-icon" />
                            </span>
                        } 
                        id="basic-nav-dropdown"
                        onToggle={toggleDropdown}>
                            <NavDropdown.Item as={NavLink} to="/landscape" onClick={handleLinkClick}>Landscape</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/landscape2" onClick={handleLinkClick}>Landscape 2</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/nature" onClick={handleLinkClick}>Nature</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/nature2" onClick={handleLinkClick}>Nature 2</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/pets" onClick={handleLinkClick}>Pets</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/pets2" onClick={handleLinkClick}>Pets 2</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/ruins" onClick={handleLinkClick}>Ruins</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBarComponent;
