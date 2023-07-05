import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';

function NavBar() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!isMenuOpen);
    };

    let navbarClasses = ['NavBar'];
    if (isMenuOpen) {
        navbarClasses.push('open');
    }
    return (

        <nav className={isMenuOpen ? "open" : "NavBar"}>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to='/photography'>Photography</Link>
                </li>
                <li>
                    <Link to='/experience'>Experience</Link>
                </li>
                <li>
                    <Link to="/info">Info</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;