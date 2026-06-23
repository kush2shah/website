import React from 'react';
import { Link } from 'react-router-dom';

import santorini from '../assets/aerial/greece/santorini.jpeg';
import centibleTeam from '../assets/experience/centible/centible_team.jpeg';
import balboa from '../assets/digital/a7/balboa.jpeg';

const TILES: { to: string; img: string; alt: string; label: string; eager?: boolean }[] = [
    { to: '/photography', img: santorini, alt: 'Aerial of Santorini', label: 'Photography', eager: true },
    { to: '/work', img: centibleTeam, alt: 'The Centible team on launch day', label: 'Work', eager: true },
    { to: '/projects', img: balboa, alt: 'Balboa Park', label: 'Projects' },
];

const Home: React.FC = () => {
    return (
        <div className="home">
            <h1 className="home-name">Kush Shah</h1>
            <div className="home-grid">
                {TILES.map(t => (
                    <Link key={t.to} className="home-tile" to={t.to}>
                        <img src={t.img} alt={t.alt} loading={t.eager ? 'eager' : 'lazy'} />
                        <div className="home-label">{t.label}</div>
                        <div className="home-label-line" />
                    </Link>
                ))}
            </div>
            <footer className="home-footer">
                <span className="home-copy">© 2026 Kush Shah · NC</span>
                <div className="home-footer-links">
                    <a href="https://github.com/kush2shah/website" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <Link to="/changelog">Changelog</Link>
                </div>
            </footer>
        </div>
    );
};

export default Home;
