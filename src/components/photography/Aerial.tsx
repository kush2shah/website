import React, { useState } from 'react';
import firebase from 'firebase/app';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import BudaCastle from '../../assets/aerial/budapest/buda_castle.jpeg';
import Budapest from '../../assets/aerial/budapest/budapest_aerial.jpeg'

import '../../css/photo/photo.scss'

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

function Aerial() {
    const [selectedPhoto, setSelectedPhoto] = useState<{ src: string, alt: string, caption: string } | null>(null);

    const photos = [
        { src: BudaCastle, alt: "Buda Castle", caption: "DJI Mavic Air 2<br/>Budapest, Hungary" },
        { src: Budapest, alt: "Budapest Aerial", caption: "DJI Mavic Air 2<br/>Budapest, Hungary" },
    ];

    return (
        <div>
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Aerial
            </motion.h1>

            <div className="image-container">
                {photos.map((photo, index) => (
                    <AnimatedPhoto
                        key={index}
                        src={photo.src}
                        alt={photo.alt}
                        caption={photo.caption}
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
                            src={selectedPhoto.src}
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
}

export default Aerial;
