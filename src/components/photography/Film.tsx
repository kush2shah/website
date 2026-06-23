import React, { useState } from 'react';

import GalleryPage from './GalleryPage';
import GalleryModal from './GalleryModal';
import PhotoTile from './PhotoTile';

import lake from '../../assets/film/gold_200/lake.jpeg';
import balance from '../../assets/film/gold_200/balance.jpeg';
import madison from '../../assets/film/gold_200/madison.jpeg';
import glimmer from '../../assets/film/gold_200/glimmer.jpeg';

type Photo = { src: string; alt: string };
type Group = { stock: string; photos: Photo[] };

function Film() {
    const [modal, setModal] = useState<Photo | null>(null);

    const groups: Group[] = [
        {
            stock: 'Kodak Gold 200',
            photos: [
                { src: lake, alt: 'A blue lake with mountains in the background' },
                { src: madison, alt: 'Madison taking a photo of the water' },
                { src: balance, alt: 'Person walking along a log on the water' },
                { src: glimmer, alt: 'Defocused view of a lake and mountains' },
            ],
        },
    ];

    return (
        <GalleryPage title="Film" subtitle="Nikon FE · Micro-NIKKOR 55mm f/2.8">
            {groups.map((g, gi) => (
                <div key={gi} className="film-group">
                    <div className="film-stock-label">{g.stock}</div>
                    <div className="gallery-grid">
                        {g.photos.map((p, pi) => (
                            <PhotoTile key={pi} src={p.src} alt={p.alt} index={pi} onClick={() => setModal(p)} />
                        ))}
                    </div>
                </div>
            ))}
            {modal && <GalleryModal src={modal.src} alt={modal.alt} onClose={() => setModal(null)} />}
        </GalleryPage>
    );
}

export default Film;
