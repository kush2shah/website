import React, { useState } from 'react';

import GalleryPage from './GalleryPage';
import GalleryModal from './GalleryModal';
import PhotoTile from './PhotoTile';

type Group = { title: string; publication: string; photos: string[] };

function Published() {
    const [modal, setModal] = useState<{ src: string; alt: string } | null>(null);

    const groups: Group[] = [
        {
            title: 'Oxford Drama',
            publication: 'Coulture Magazine · 2024',
            photos: [
                'https://website-ks.s3.us-east-2.amazonaws.com/coulture/Screenshot+2025-10-13+at+11.51.31%E2%80%AFPM.png',
                'https://website-ks.s3.us-east-2.amazonaws.com/coulture/Screenshot+2025-10-13+at+11.51.52%E2%80%AFPM.png',
                'https://website-ks.s3.us-east-2.amazonaws.com/coulture/Screenshot+2025-10-13+at+11.52.08%E2%80%AFPM.png',
            ],
        },
        {
            title: 'Artificial Identity',
            publication: 'Coulture Magazine · 2024',
            photos: [
                'https://website-ks.s3.us-east-2.amazonaws.com/coulture/Screenshot+2025-10-13+at+11.50.31%E2%80%AFPM.png',
                'https://website-ks.s3.us-east-2.amazonaws.com/coulture/Screenshot+2025-10-13+at+11.50.53%E2%80%AFPM.png',
                'https://website-ks.s3.us-east-2.amazonaws.com/coulture/Screenshot+2025-10-13+at+11.51.05%E2%80%AFPM.png',
            ],
        },
        {
            title: 'Royal Heist',
            publication: 'Coulture Magazine · 2023',
            photos: [
                'https://website-ks.s3.us-east-2.amazonaws.com/coulture/Screenshot+2025-10-13+at+11.53.48%E2%80%AFPM.png',
                'https://website-ks.s3.us-east-2.amazonaws.com/coulture/Screenshot+2025-10-13+at+11.54.07%E2%80%AFPM.png',
                'https://website-ks.s3.us-east-2.amazonaws.com/coulture/Screenshot+2025-10-13+at+11.54.23%E2%80%AFPM.png',
                'https://website-ks.s3.us-east-2.amazonaws.com/coulture/Screenshot+2025-10-13+at+11.54.35%E2%80%AFPM.png',
            ],
        },
    ];

    return (
        <GalleryPage title="Published Work">
            {groups.map((g, gi) => (
                <div key={gi} className="editorial-group">
                    <div className="editorial-header">
                        <h2 className="editorial-title">{g.title}</h2>
                        <p className="editorial-pub">{g.publication}</p>
                    </div>
                    <div className="gallery-grid">
                        {g.photos.map((src, pi) => (
                            <PhotoTile
                                key={pi}
                                src={src}
                                alt={`${g.title} ${pi + 1}`}
                                index={pi}
                                onClick={() => setModal({ src, alt: g.title })}
                            />
                        ))}
                    </div>
                </div>
            ))}
            {modal && <GalleryModal src={modal.src} alt={modal.alt} onClose={() => setModal(null)} />}
        </GalleryPage>
    );
}

export default Published;
