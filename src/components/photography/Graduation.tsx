import React, { useState } from 'react';

import GalleryPage from './GalleryPage';
import GalleryModal from './GalleryModal';
import PhotoTile from './PhotoTile';

import beliz from '../../assets/graduation/beliz.jpeg';
import erin from '../../assets/graduation/erin.jpg';
import lauren from '../../assets/graduation/lauren.jpeg';
import mccauley from '../../assets/graduation/McCauley_Cap_Throw.jpeg';
import pj from '../../assets/graduation/pj.jpeg';
import marge from '../../assets/graduation/marge.jpg';
import chase from '../../assets/graduation/chase.jpeg';

type Photo = { src: string; alt: string; name: string; cls: string };

function Graduation() {
    const [modal, setModal] = useState<Photo | null>(null);

    const photos: Photo[] = [
        { src: chase, alt: 'A grad looking at computers programming', name: 'Chase Allen', cls: 'Class of 2023' },
        { src: marge, alt: 'A grad at the Old Well leaning into the camera', name: 'Margaret Seets', cls: 'Class of 2023' },
        { src: beliz, alt: 'A grad at the Old Well leaning into the camera', name: 'Beliz Yilmaz', cls: 'Class of 2023' },
        { src: lauren, alt: 'A grad in Kenan Stadium looking down into the camera', name: 'Lauren Alexander', cls: 'Class of 2023' },
        { src: mccauley, alt: 'A group of seven grads throwing their hats', name: 'McCauley St', cls: 'Class of 2023' },
        { src: pj, alt: 'A grad leaning down and looking into the camera', name: 'PJ Morales', cls: 'Class of 2023' },
        { src: erin, alt: 'A grad in sunglasses against a sea of blue chairs', name: 'Erin Silva', cls: 'Class of 2023' },
        { src: 'https://res.cloudinary.com/degt8oftq/image/upload/f_auto,q_auto/v1/website/grad/amh2vbe5crgueudnor7h', alt: 'A grad popping champagne in front of the Bell Tower', name: 'Meghan Sun', cls: 'Class of 2024' },
        { src: 'https://res.cloudinary.com/degt8oftq/image/upload/f_auto,q_auto/v1/website/grad/phtbok7cjw6aksdwei8g', alt: 'Grads throwing their caps at Kenan Stadium', name: '', cls: 'Class of 2024' },
        { src: 'https://res.cloudinary.com/degt8oftq/image/upload/f_auto,q_auto/v1/website/grad/gm9qjvkjhwjky1ovk40j', alt: 'A grad in front of flowers by the Old Well', name: 'Caroline Norland', cls: 'Class of 2024' },
        { src: 'https://res.cloudinary.com/degt8oftq/image/upload/f_auto,q_auto/v1/website/grad/jvafkpryacv2sjuu3jq8', alt: 'Grad shotgunning at Kenan Stadium', name: 'Rithvik Chelasani', cls: 'Class of 2024' },
        { src: 'https://res.cloudinary.com/degt8oftq/image/upload/f_auto,q_auto/v1/website/grad/aiujccvrg0ojb32cbwj7', alt: 'Grad sitting in front of her bike by Wilson Library', name: 'Lydia Thomas', cls: 'Class of 2024' },
        { src: 'https://res.cloudinary.com/degt8oftq/image/upload/f_auto,q_auto/v1/website/grad/n0vk1ezklqjnzrmx1rty', alt: 'Two grads taking a selfie in front of the Bell Tower', name: 'Katie and Isabel', cls: 'Class of 2024' },
        { src: 'https://res.cloudinary.com/degt8oftq/image/upload/f_auto,q_auto/v1/website/grad/gegj3ip3xdfjcjulmu7h', alt: 'A grad leaning down with Wilson Library in the background', name: 'Sara Vandersip', cls: 'Class of 2024' },
        { src: 'https://res.cloudinary.com/degt8oftq/image/upload/f_auto,q_auto/v1/website/grad/mqis4zjc1wnqwzxbnotg', alt: 'A grad and their dog at the Old Well', name: 'Katie Noble', cls: 'Class of 2024' },
    ];

    return (
        <GalleryPage title="Grad Photos">
            <div className="booking-section">
                <p className="booking-text">
                    Booking capacity is limited and accepted at my discretion.
                    Reach out at <a href="mailto:photo@kushs.org" className="booking-link">photo@kushs.org</a> for inquiries.
                </p>
            </div>
            <div className="gallery-grid">
                {photos.map((p, i) => (
                    <PhotoTile key={i} src={p.src} alt={p.alt} line1={p.name} line2={p.cls} index={i} onClick={() => setModal(p)} />
                ))}
            </div>
            {modal && <GalleryModal src={modal.src} alt={modal.alt} onClose={() => setModal(null)} />}
        </GalleryPage>
    );
}

export default Graduation;
