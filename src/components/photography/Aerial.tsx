import React, { useState } from 'react';

import GalleryPage from './GalleryPage';
import GalleryModal from './GalleryModal';
import PhotoTile from './PhotoTile';

import BudaCastle from '../../assets/aerial/budapest/buda_castle.jpeg';
import Budapest from '../../assets/aerial/budapest/budapest_aerial.jpeg';

type Photo = { src: string; alt: string; line1: string; line2: string };

function Aerial() {
    const [modal, setModal] = useState<Photo | null>(null);

    const photos: Photo[] = [
        { src: BudaCastle, alt: 'Buda Castle', line1: 'DJI Mavic Air 2', line2: 'Budapest, Hungary' },
        { src: Budapest, alt: 'Budapest aerial', line1: 'DJI Mavic Air 2', line2: 'Budapest, Hungary' },
    ];

    return (
        <GalleryPage title="Aerial">
            <div className="gallery-grid">
                {photos.map((p, i) => (
                    <PhotoTile key={i} src={p.src} alt={p.alt} line1={p.line1} line2={p.line2} index={i} onClick={() => setModal(p)} />
                ))}
            </div>
            {modal && <GalleryModal src={modal.src} alt={modal.alt} onClose={() => setModal(null)} />}
        </GalleryPage>
    );
}

export default Aerial;
