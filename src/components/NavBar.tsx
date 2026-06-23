import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const LINKS: [string, string][] = [
    ['/photography', 'Photography'],
    ['/work', 'Work'],
    ['/projects', 'Projects'],
    ['/education', 'Education'],
    ['/info', 'Info'],
];

const NavBar: React.FC = () => {
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Close the drawer whenever the route changes.
    useEffect(() => {
        setOpen(false);
    }, [location.pathname]);

    // The redesign shows no nav on the landing page.
    if (location.pathname === '/') return null;

    const closeDrawer = () => setOpen(false);

    return (
        <>
            <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
                <Link className="nav-name" to="/">Kush Shah</Link>
                <ul className="nav-links">
                    {LINKS.map(([to, label]) => (
                        <li key={to}>
                            <Link to={to} className={location.pathname === to ? 'active' : ''}>
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <button className="nav-menu-btn" onClick={() => setOpen(v => !v)} aria-label="Menu">
                    {open ? (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    ) : (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <line x1="4" y1="8" x2="20" y2="8" /><line x1="4" y1="16" x2="20" y2="16" />
                        </svg>
                    )}
                </button>
            </nav>
            <div className={`nav-drawer ${open ? 'open' : ''}`}>
                <Link to="/" onClick={closeDrawer}>Home</Link>
                {LINKS.map(([to, label]) => (
                    <Link key={to} to={to} onClick={closeDrawer}>{label}</Link>
                ))}
            </div>
        </>
    );
};

export default NavBar;
