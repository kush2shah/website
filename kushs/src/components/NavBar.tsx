import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from "react-icons/fi"; // Hamburger Menu Icon
import { CgClose } from "react-icons/cg"; // Close Menu Icon
import '../css/NavBar.scss';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        });
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
            <div></div>

            <ul className={`navbar-menu ${isMenuOpen ? "show-menu" : ""}`}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/photography">Photography</Link>
                </li>
                <li>
                    <Link to="/experience">Experience</Link>
                </li>
                <li>
                    <Link to="/info">Info</Link>
                </li>
            </ul>

            <button onClick={toggleMenu} className="menu-icon">
                {isMenuOpen ? <CgClose /> : <FiMenu />}
            </button>
        </nav>
    );
}

export default NavBar;