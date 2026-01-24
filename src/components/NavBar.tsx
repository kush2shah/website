import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import '../css/global/NavBar.scss';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <ul className={`nav-menu ${isOpen ? 'open' : ''}`}>
                <li className="nav-menu__item">
                    <Link to="/" onClick={closeMenu}>Home</Link>
                </li>
                <li className="nav-menu__item">
                    <Link to="/photography" onClick={closeMenu}>Photography</Link>
                </li>
                <li className="nav-menu__item">
                    <Link to="/experience" onClick={closeMenu}>Experience</Link>
                </li>
                <li className="nav-menu__item">
                    <Link to="/info" onClick={closeMenu}>Info</Link>
                </li>
            </ul>

            <button
                className="menu-button"
                onClick={toggleMenu}
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </nav>
    );
};

export default NavBar;