import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseCrack, faPaw, faSeedling, faMountainSun, faHouse } from "@fortawesome/free-solid-svg-icons";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
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
                <ul>
                    <li><NavLink to="/" className={({ isActive }) => (isActive || currentLocation.pathname === "/" ? 'selected' : '')} onClick={toggleMenu}>Home <FontAwesomeIcon icon={faHouse} /></NavLink></li>
                    <li><NavLink to="/landscape" className={({ isActive }) => (isActive ? 'selected' : '')} onClick={toggleMenu}>Landscape <FontAwesomeIcon icon={faMountainSun} /></NavLink></li>
                    <li><NavLink to="/nature" className={({ isActive }) => (isActive ? 'selected' : '')} onClick={toggleMenu}>Nature <FontAwesomeIcon icon={faSeedling} /></NavLink></li>
                    <li><NavLink to="/pets" className={({ isActive }) => (isActive ? 'selected' : '')} onClick={toggleMenu}>Pets <FontAwesomeIcon icon={faPaw} /></NavLink></li>
                    <li><NavLink to="/ruins" className={({ isActive }) => (isActive ? 'selected' : '')} onClick={toggleMenu}>Ruins <FontAwesomeIcon icon={faHouseCrack} /></NavLink></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
