import React from 'react';
import { NavLink } from 'react-router-dom';
import NavDropdown from './NavDropdown';
import "./Navbar.scss";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src="https://raw.githubusercontent.com/bellamoss77/react-photog-portfolio/d044eb6386bfb3acad1a399c0895ecf0c00ebf09/public/UPDATED-LOGO.svg" height="60" />
            </div>
            <ul className="links-container">
                <li className="nav-link">
                    <NavLink
                        to="/"
                        exact
                        className={({ isActive, isPending }) => 
                        isPending ? 'pending' : isActive ? 'active' : ''
                        }
                    >
                        Home
                    </NavLink>
                </li>
                <li className="nav-dropdown">
                    <NavDropdown />
                </li>
                <li className="nav-link">
                    <NavLink 
                        to="/about"
                        className={({ isActive, isPending }) => 
                        isPending ? 'pending' : isActive ? 'active' : ''
                        }
                    >
                        About
                    </NavLink>
                </li>
                <li className="nav-link">
                    <NavLink 
                        to="/contact"
                        className={({ isActive, isPending }) => 
                        isPending ? 'pending' : isActive ? 'active' : ''
                        }
                    >
                        Contact Us
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;