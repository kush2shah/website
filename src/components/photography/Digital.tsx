import React, { useState } from 'react';
import firebase from 'firebase/app';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import brushing from '../../assets/digital/x100/mirror_brushing.jpeg';
import hannah from '../../assets/digital/x100/mirror_hannah.jpeg';
import ggb from '../../assets/digital/a7/golden_gate.jpeg';
import balboa from '../../assets/digital/a7/balboa.jpeg';
import halfdome from '../../assets/digital/a7/halfdome.jpg';
import malaysia from '../../assets/digital/xe4/malaysia.jpg';
import malaysia2 from '../../assets/digital/xe4/malaysia2.jpg';
import tunnelview from '../../assets/digital/xe4/tunnelview.jpg';

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

function Digital() {
    const [selectedPhoto, setSelectedPhoto] = useState<{ src: string, alt: string, caption: string } | null>(null);

    const photos = [
        { src: balboa, alt: "Black and white photo of someone brushing", caption: "Sony a7R III + FE 24-70 f/2.8 GM<br/> San Diego, CA" },
        { src: ggb, alt: "The Golden Gate Bridge", caption: "Sony a7R III + FE 16-35 f/2.8 GM<br/> San Francisco, CA" },
        { src: halfdome, alt: "Yosemite stars", caption: "Sony a7R III + FE 24-70 f/2.8 GM<br/> Yosemite National Park, CA" },
        { src: tunnelview, alt: "Tunnel View Yosemite", caption: "FUJIFILM X-E4 + XF 27mm f/2.8<br/> Yosemite National Park, CA" },
        { src: malaysia, alt: "Malaysia landscape", caption: "FUJIFILM X-E4 + XF 23mm f/2<br/> Penang, Malaysia" },
        { src: malaysia2, alt: "Malaysia scene", caption: "FUJIFILM X-E4 + XF 23mm f/2<br/> Penang, Malaysia" },
        { src: brushing, alt: "Black and white photo of someone brushing", caption: "FUJIFILM FinePix X100<br/> Chapel Hill, NC" },
        { src: hannah, alt: "Black and white photo of someone getting ready", caption: "FUJIFILM FinePix X100<br/> Chapel Hill, NC" },
    ];

    return (
        <div>
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Digital
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

export default Digital;
