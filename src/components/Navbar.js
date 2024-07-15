import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faCaretDown, faMountainSun, faSeedling, faPaw, faHouseCrack } from "@fortawesome/free-solid-svg-icons";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const currentLocation = useLocation();

    useEffect(() => {
        ScrollTrigger.create({
            start: 'top top',
            end: '+=100',
            onUpdate: self => {
                setIsScrolled(self.progress > 0);
            }
        });
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    }

    useEffect(() => {
        if (window.innerWidth <= 768) {
            if (isMenuOpen) {
                gsap.to(".navbar-menu", { duration: 0.5, x: 0, ease: "power4.out" });
            } else {
                gsap.to(".navbar-menu", { duration: 0.5, x: "100%", ease: "power4.in" });
            }
        }
    }, [isMenuOpen]);

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="navbar-brand">
                <span className={`navbar-toggler ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </span>
            </div>
            <div className={`navbar-menu ${isMenuOpen ? 'is-active' : ''}`}>
                <img className="logo" src="https://raw.githubusercontent.com/bellamoss77/react-photog-portfolio/d044eb6386bfb3acad1a399c0895ecf0c00ebf09/public/UPDATED-LOGO.svg" alt="logo" />
                <ul>
                    <li><NavLink to="/" className={({ isActive }) => (isActive || currentLocation.pathname === "/" ? 'selected' : '')} onClick={toggleMenu}>Home <FontAwesomeIcon icon={faHouse} /></NavLink></li>
                    <li className="dropdown">
                        <span onClick={toggleDropdown}>
                            Portfolios <FontAwesomeIcon icon={faCaretDown} />
                        </span>
                        <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
                            <li><NavLink to="/landscape" className={({ isActive }) => (isActive ? 'selected' : '')} onClick={toggleMenu}>Landscape <FontAwesomeIcon icon={faMountainSun} /></NavLink></li>
                            <li><NavLink to="/landscape2" className={({ isActive }) => (isActive ? 'selected' : '')} onClick={toggleMenu}>Landscape 2 <FontAwesomeIcon icon={faMountainSun} /></NavLink></li>
                            <li><NavLink to="/nature" className={({ isActive }) => (isActive ? 'selected' : '')} onClick={toggleMenu}>Nature <FontAwesomeIcon icon={faSeedling} /></NavLink></li>
                            <li><NavLink to="/nature2" className={({ isActive }) => (isActive ? 'selected' : '')} onClick={toggleMenu}>Nature 2 <FontAwesomeIcon icon={faSeedling} /></NavLink></li>
                            <li><NavLink to="/pets" className={({ isActive }) => (isActive ? 'selected' : '')} onClick={toggleMenu}>Pets <FontAwesomeIcon icon={faPaw} /></NavLink></li>
                            <li><NavLink to="/pets2" className={({ isActive }) => (isActive ? 'selected' : '')} onClick={toggleMenu}>Pets 2 <FontAwesomeIcon icon={faPaw} /></NavLink></li>
                            <li><NavLink to="/ruins" className={({ isActive }) => (isActive ? 'selected' : '')} onClick={toggleMenu}>Ruins <FontAwesomeIcon icon={faHouseCrack} /></NavLink></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
