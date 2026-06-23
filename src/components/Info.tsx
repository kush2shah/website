import React from 'react';
import headshot from '../assets/digital/a7/headshot.jpeg';

const LINKS = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kushsha/' },
    { label: 'Instagram', href: 'https://www.instagram.com/kushspictures/' },
];

const Info: React.FC = () => {
    return (
        <div>
            <div className="info-wrap">
                <div className="info-hero">
                    <img className="info-photo" src={headshot} alt="Kush Shah in front of the Old Well" />
                    <div className="info-hero-text">
                        <h1 className="info-name">Kush Shah</h1>
                        <p className="info-tagline">Photos · Products · Travel</p>
                    </div>
                </div>
                <div className="info-bio">
                    <p>
                        I'm a Product Manager at Bandwidth, where I own A2P Messaging — a product that enables
                        businesses to reach their clients via SMS and MMS using local phone numbers.
                    </p>
                    <p>
                        At UNC Chapel Hill, I studied Computer Science and Business Administration with a minor in
                        Philosophy, Politics, and Economics.
                    </p>
                    <p>
                        I'm passionate about building things for people to use, and understanding the people I'm
                        building for — improving their lives through the products I create.
                    </p>
                    <p>
                        In the time left over, I take photos of the people and world around me, travel, listen to
                        music, and push myself into new territory wherever I can find it.
                    </p>
                </div>
                <div className="info-links">
                    {LINKS.map(l => (
                        <a key={l.label} className="info-link" href={l.href} target="_blank" rel="noopener noreferrer">
                            {l.label}
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                            </svg>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Info;
