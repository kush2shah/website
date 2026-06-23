import React, { useState } from 'react';

import GalleryPage from './GalleryPage';
import GalleryModal from './GalleryModal';
import PhotoTile from './PhotoTile';

import brushing from '../../assets/digital/x100/mirror_brushing.jpeg';
import hannah from '../../assets/digital/x100/mirror_hannah.jpeg';
import ggb from '../../assets/digital/a7/golden_gate.jpeg';
import balboa from '../../assets/digital/a7/balboa.jpeg';
import halfdome from '../../assets/digital/a7/halfdome.jpg';
import malaysia from '../../assets/digital/xe4/malaysia.jpg';
import malaysia2 from '../../assets/digital/xe4/malaysia2.jpg';
import tunnelview from '../../assets/digital/xe4/tunnelview.jpg';

type Photo = { src: string; alt: string; line1: string; line2: string };

function Digital() {
    const [modal, setModal] = useState<Photo | null>(null);

    const photos: Photo[] = [
        { src: balboa, alt: 'Balboa Park', line1: 'Sony a7R III · FE 24–70 f/2.8 GM', line2: 'San Diego, CA' },
        { src: ggb, alt: 'The Golden Gate Bridge', line1: 'Sony a7R III · FE 16–35 f/2.8 GM', line2: 'San Francisco, CA' },
        { src: halfdome, alt: 'Yosemite stars', line1: 'Sony a7R III · FE 24–70 f/2.8 GM', line2: 'Yosemite, CA' },
        { src: tunnelview, alt: 'Tunnel View Yosemite', line1: 'FUJIFILM X-E4 · XF 27mm f/2.8', line2: 'Yosemite, CA' },
        { src: malaysia, alt: 'Malaysia landscape', line1: 'FUJIFILM X-E4 · XF 23mm f/2', line2: 'Penang, Malaysia' },
        { src: malaysia2, alt: 'Malaysia scene', line1: 'FUJIFILM X-E4 · XF 23mm f/2', line2: 'Penang, Malaysia' },
        { src: brushing, alt: 'Black and white photo of someone brushing', line1: 'FUJIFILM FinePix X100', line2: 'Chapel Hill, NC' },
        { src: hannah, alt: 'Black and white photo of someone getting ready', line1: 'FUJIFILM FinePix X100', line2: 'Chapel Hill, NC' },
    ];

    return (
        <GalleryPage title="Digital">
            <div className="gallery-grid">
                {photos.map((p, i) => (
                    <PhotoTile key={i} src={p.src} alt={p.alt} line1={p.line1} line2={p.line2} index={i} onClick={() => setModal(p)} />
                ))}
            </div>
            {modal && <GalleryModal src={modal.src} alt={modal.alt} onClose={() => setModal(null)} />}
        </GalleryPage>
    );
}

export default Digital;
