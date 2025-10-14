import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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

// Animation component for each photo with staged hover effects
function AnimatedPhoto({ src, alt, caption, index, onClick }: { src: string, alt: string, caption: string, index: number, onClick: () => void }) {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    const [hoverStage, setHoverStage] = React.useState<'none' | 'initial' | 'sustained'>('none');
    const hoverTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

    const handleMouseEnter = () => {
        setHoverStage('initial');

        // After 1s, move to sustained hover
        hoverTimeoutRef.current = setTimeout(() => {
            setHoverStage('sustained');
        }, 1000);
    };

    const handleMouseLeave = () => {
        setHoverStage('none');
        if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    };

    return (
        <motion.div
            ref={ref}
            className={`image-wrapper ${hoverStage !== 'none' ? `hover-${hoverStage}` : ''}`}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.4, 0, 0.2, 1]
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
        >
            <img src={src} alt={alt} loading="lazy" />
            <div className="overlay">
                <p dangerouslySetInnerHTML={{ __html: caption }} />
            </div>
        </motion.div>
    );
}

const Graduation = () => {
    const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

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
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Graduation
            </motion.h1>

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
                    <AnimatedPhoto
                        key={index}
                        src={photo.url}
                        alt={photo.alt}
                        caption={`${photo.name}<br/>${photo.class}`}
                        index={index}
                        onClick={() => setSelectedPhoto(photo)}
                    />
                ))}
            </div>

            {/* Click-to-open Modal */}
            <AnimatePresence>
                {selectedPhoto && (
                    <motion.div
                        className="photo-modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => setSelectedPhoto(null)}
                    >
                        <motion.img
                            src={selectedPhoto.url}
                            alt={selectedPhoto.alt}
                            className="photo-modal-image"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Graduation;