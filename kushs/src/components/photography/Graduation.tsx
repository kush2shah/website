import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

import beliz from '../../assets/graduation/beliz.jpeg';
import erin from '../../assets/graduation/erin.jpg';
import lauren from '../../assets/graduation/lauren.jpeg';
import mccauley from '../../assets/graduation/McCauley_Cap_Throw.jpeg';
import pj from '../../assets/graduation/pj.jpeg';
import marge from '../../assets/graduation/marge.jpg';
import chase from '../../assets/graduation/chase.jpeg';

type Photo = {
    url: string;
    alt: string;
    name: string;
    class: string;
};

const Graduation = () => {
    const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (selectedPhoto) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedPhoto]);

    const photos: Photo[] = [
        {
            url: chase,
            alt: "A grad looking at computers programming",
            name: "Chase Allen",
            class: "Class of 2023"
        },
        {
            url: marge,
            alt: "A grad at the Old Well looking into the camera leaning",
            name: "Margaret Seets",
            class: "Class of 2023"
        },
        {
            url: beliz,
            alt: "A grad at the Old Well looking into the camera leaning",
            name: "Beliz Yilmaz",
            class: "Class of 2023"
        },
        {
            url: lauren,
            alt: "A grad in Kenan Stadium looking down into the camera",
            name: "Lauren Alexander",
            class: "Class of 2023"
        },
        {
            url: mccauley,
            alt: "A group of seven grads throwing their hats",
            name: "McCauley St",
            class: "Class of 2023"
        },
        {
            url: pj,
            alt: "A grad leaning down and looking into the camera",
            name: "PJ Morales",
            class: "Class of 2023"
        },
        {
            url: erin,
            alt: "A grad in sunglasses against a sea of blue chairs",
            name: "Erin Silva",
            class: "Class of 2023"
        },
        {
            url: 'https://res.cloudinary.com/degt8oftq/image/upload/f_auto,q_auto/v1/website/grad/amh2vbe5crgueudnor7h',
            alt: "A grad popping champagne in front of the Bell Tower",
            name: "Meghan Sun",
            class: "Class of 2024"
        },
        {
            url: 'https://res.cloudinary.com/degt8oftq/image/upload/f_auto,q_auto/v1/website/grad/phtbok7cjw6aksdwei8g',
            alt: "Grads throwing their caps at Kenan Stadium",
            name: "",
            class: "Class of 2024"
        },
        {
            url: 'https://res.cloudinary.com/degt8oftq/image/upload/f_auto,q_auto/v1/website/grad/gm9qjvkjhwjky1ovk40j',
            alt: "A grad in front of flowers by the Old Well",
            name: "Caroline Norland",
            class: "Class of 2024"
        },
        {
            url: 'https://res.cloudinary.com/degt8oftq/image/upload/f_auto,q_auto/v1/website/grad/jvafkpryacv2sjuu3jq8',
            alt: "Grad shotgunning at Kenan Stadium",
            name: "Rithvik Chelasani",
            class: "Class of 2024"
        },
        {
            url: 'https://res.cloudinary.com/degt8oftq/image/upload/f_auto,q_auto/v1/website/grad/aiujccvrg0ojb32cbwj7',
            alt: "Grad sitting in front of her bike by Wilson Library",
            name: "Lydia Thomas",
            class: "Class of 2024"
        },
        {
            url: 'https://res.cloudinary.com/degt8oftq/image/upload/f_auto,q_auto/v1/website/grad/n0vk1ezklqjnzrmx1rty',
            alt: "Two grads taking a selfie in front of the Bell Tower",
            name: "Katie and Isabel",
            class: "Class of 2024"
        },
        {
            url: 'https://res.cloudinary.com/degt8oftq/image/upload/f_auto,q_auto/v1/website/grad/gegj3ip3xdfjcjulmu7h',
            alt: "A grad leaning down with Wilson Library in the background",
            name: "Sara Vandersip",
            class: "Class of 2024"
        },
        {
            url: 'https://res.cloudinary.com/degt8oftq/image/upload/f_auto,q_auto/v1/website/grad/mqis4zjc1wnqwzxbnotg',
            alt: "A grad and their dog at the Old Well",
            name: "Katie Noble",
            class: "Class of 2024"
        },
    ];

    return (
        <div>
            <h1>Graduation</h1>

            <a href={'mailto:photo@kushs.org'} className='link'>
                <button className={'gh-button'}>
                    Booking Inquiries
                </button>
            </a>

            <div>
                <p>Thank you for your interest in booking your grad photos with me.</p>
                <p>My booking capacity is extremely limited, and I reserve the right to accept bookings at my discretion.</p>
                <p>If you are interested in booking with me, please reach out to me directly at <a className={'link'} href={'mailto:photo@kushs.org'}>photo@kushs.org</a>.</p>
            </div>

            <div className="image-container">
                {photos.map((photo, index) => (
                    <div
                        key={index}
                        className="image-wrapper"
                        onClick={() => setSelectedPhoto(photo)}
                    >
                        <img src={photo.url} alt={photo.alt} />
                        <div className="overlay">
                            <p>{photo.name}<br></br>{photo.class}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Photo Modal */}
            {selectedPhoto && (
                <div
                    className={`photo-modal ${selectedPhoto ? 'visible' : ''}`}
                    onClick={() => setSelectedPhoto(null)}
                >
                    <button
                        className="photo-modal__close"
                        onClick={() => setSelectedPhoto(null)}
                        aria-label="Close photo"
                    >
                        <X size={24} />
                    </button>
                    <img
                        src={selectedPhoto.url}
                        alt={selectedPhoto.alt}
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </div>
    );
};

export default Graduation;