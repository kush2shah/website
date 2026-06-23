import React from 'react';
import { useNavigate } from 'react-router-dom';

import PhotoTile from './PhotoTile';

import grad from '../../assets/graduation/McCauley_Cap_Throw.jpeg';
import aerial from '../../assets/aerial/budapest/budapest_aerial.jpeg';
import digital from '../../assets/digital/a7/golden_gate.jpeg';
import film from '../../assets/film/portra_160/beach_walk.jpeg';
import published from '../../assets/digital/a7/halfdome.jpg';

function Photography() {
    const navigate = useNavigate();
    const tiles = [
        { to: '/grad', label: 'Grad Photos', img: grad },
        { to: '/aerial', label: 'Aerial', img: aerial },
        { to: '/digital', label: 'Digital', img: digital },
        { to: '/film', label: 'Film', img: film },
        { to: '/published', label: 'Published Work', img: published },
    ];

    return (
        <div>
            <div className="section-header">
                <span className="section-title">Photography</span>
            </div>
            <div className="gallery-grid">
                {tiles.map((t, i) => (
                    <PhotoTile
                        key={t.to}
                        src={t.img}
                        alt={t.label}
                        line1={t.label}
                        index={i}
                        onClick={() => navigate(t.to)}
                    />
                ))}
            </div>
        </div>
    );
}

export default Photography;
