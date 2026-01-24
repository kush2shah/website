import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import '../../css/photo/photo.scss';
import '../../css/global/left-align.scss';

type Photo = {
    url: string;
    alt: string;
};

type PhotoGroup = {
    title: string;
    publication: string;
    photos: Photo[];
};

// Animation component for each photo with staged hover effects (no overlay)
function AnimatedPhoto({ src, alt, index, onClick }: { src: string, alt: string, index: number, onClick: () => void }) {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    const [hoverStage, setHoverStage] = React.useState<'none' | 'initial' | 'sustained'>('none');
    const [gridSpan, setGridSpan] = React.useState(12);
    const hoverTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);
    const imgRef = React.useRef<HTMLImageElement>(null);

    React.useEffect(() => {
        const img = imgRef.current;
        if (img) {
            const handleLoad = () => {
                const aspectRatio = img.naturalWidth / img.naturalHeight;

                // Determine grid span based on aspect ratio
                if (aspectRatio > 1.5) {
                    // Wide landscape - full width
                    setGridSpan(12);
                } else if (aspectRatio > 1.2) {
                    // Standard landscape - 3/4 width
                    setGridSpan(9);
                } else if (aspectRatio > 0.8) {
                    // Square-ish - 2/3 width
                    setGridSpan(8);
                } else {
                    // Portrait - 1/2 width
                    setGridSpan(6);
                }
            };

            if (img.complete) {
                handleLoad();
            } else {
                img.addEventListener('load', handleLoad);
                return () => img.removeEventListener('load', handleLoad);
            }
        }
    }, [src]);

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
            className={`image-wrapper-flexible ${hoverStage !== 'none' ? `hover-${hoverStage}` : ''}`}
            style={{ gridColumn: `span ${gridSpan}` }}
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
            <img ref={imgRef} src={src} alt={alt} loading="lazy" />
        </motion.div>
    );
}

function Published() {
    const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

    const photoGroups: PhotoGroup[] = [
        {
            title: "Oxford Drama",
            publication: "Coulture Magazine 2024",
            photos: [
                {
                    url: "https://website-ks.s3.us-east-2.amazonaws.com/coulture/Screenshot+2025-10-13+at+11.51.31%E2%80%AFPM.png",
                    alt: "Oxford Drama editorial from Coulture Magazine"
                },
                {
                    url: "https://website-ks.s3.us-east-2.amazonaws.com/coulture/Screenshot+2025-10-13+at+11.51.52%E2%80%AFPM.png",
                    alt: "Oxford Drama editorial from Coulture Magazine"
                },
                {
                    url: "https://website-ks.s3.us-east-2.amazonaws.com/coulture/Screenshot+2025-10-13+at+11.52.08%E2%80%AFPM.png",
                    alt: "Oxford Drama editorial from Coulture Magazine"
                },
            ]
        },
        {
            title: "Artificial Identity",
            publication: "Coulture Magazine 2024",
            photos: [
                {
                    url: "https://website-ks.s3.us-east-2.amazonaws.com/coulture/Screenshot+2025-10-13+at+11.50.31%E2%80%AFPM.png",
                    alt: "Artificial Identity editorial from Coulture Magazine"
                },
                {
                    url: "https://website-ks.s3.us-east-2.amazonaws.com/coulture/Screenshot+2025-10-13+at+11.50.53%E2%80%AFPM.png",
                    alt: "Artificial Identity editorial from Coulture Magazine"
                },
                {
                    url: "https://website-ks.s3.us-east-2.amazonaws.com/coulture/Screenshot+2025-10-13+at+11.51.05%E2%80%AFPM.png",
                    alt: "Artificial Identity editorial from Coulture Magazine"
                },
            ]
        },
        {
            title: "Royal Heist",
            publication: "Coulture Magazine 2023",
            photos: [
                {
                    url: "https://website-ks.s3.us-east-2.amazonaws.com/coulture/Screenshot+2025-10-13+at+11.53.48%E2%80%AFPM.png",
                    alt: "Royal Heist editorial from Coulture Magazine"
                },
                {
                    url: "https://website-ks.s3.us-east-2.amazonaws.com/coulture/Screenshot+2025-10-13+at+11.54.07%E2%80%AFPM.png",
                    alt: "Royal Heist editorial from Coulture Magazine"
                },
                {
                    url: "https://website-ks.s3.us-east-2.amazonaws.com/coulture/Screenshot+2025-10-13+at+11.54.23%E2%80%AFPM.png",
                    alt: "Royal Heist editorial from Coulture Magazine"
                },
                {
                    url: "https://website-ks.s3.us-east-2.amazonaws.com/coulture/Screenshot+2025-10-13+at+11.54.35%E2%80%AFPM.png",
                    alt: "Royal Heist editorial from Coulture Magazine"
                },
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
                Published Work
            </motion.h1>

            {photoGroups.map((group, groupIndex) => (
                <div key={groupIndex} style={{ marginBottom: '3rem' }}>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <h2 style={{ marginBottom: '0.25rem', fontSize: '1.75rem', fontWeight: '600' }}>{group.title}</h2>
                        <p style={{ color: '#666', fontSize: '1rem', margin: '0' }}>{group.publication}</p>
                    </div>
                    <div className="bento-container">
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
}

export default Published;