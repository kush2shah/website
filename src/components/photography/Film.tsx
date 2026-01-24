import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Import existing images
import lake from "../../assets/film/gold_200/lake.jpeg";
import balance from "../../assets/film/gold_200/balance.jpeg";
import madison from "../../assets/film/gold_200/madison.jpeg";
import glimmer from "../../assets/film/gold_200/glimmer.jpeg";

// Keep using your existing CSS
import '../../css/global/left-align.scss';
import '../../css/photo/photo.scss';

type Photo = {
    url: string;
    alt: string;
};

type PhotoGroup = {
    title: string;
    photos: Photo[];
};

// Animation component for each photo with staged hover effects
function AnimatedPhoto({ src, alt, index, onClick }: { src: string, alt: string, index: number, onClick: () => void }) {
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
        </motion.div>
    );
}

const Film = () => {
    const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

    const photoGroups: PhotoGroup[] = [
        {
            title: "Kodak Gold 200",
            photos: [
                { url: lake, alt: "A blue lake with mountains in the background" },
                { url: madison, alt: "Madison taking a photo of the water" },
                { url: balance, alt: "Person walking along a log on the water" },
                { url: glimmer, alt: "Defocused view of a lake and mountains" }
            ]
        }
    ];

    return (
        <div>
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Film
            </motion.h1>
            <h5>All photos shot on Nikon FE with a Micro-NIKKOR 55mm f/2.8 lens</h5>

            {photoGroups.map((group, groupIndex) => (
                <div key={groupIndex} className="left-align">
                    <h3>{group.title}</h3>
                    <div className="image-container">
                        {group.photos.map((photo, photoIndex) => (
                            <AnimatedPhoto
                                key={photoIndex}
                                src={photo.url}
                                alt={photo.alt}
                                index={photoIndex}
                                onClick={() => setSelectedPhoto(photo)}
                            />
                        ))}
                    </div>
                </div>
            ))}

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

export default Film;