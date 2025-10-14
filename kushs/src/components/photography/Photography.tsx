import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

import coultureImage from '../../assets/digital/a6600/Coulture.jpeg';
import gradImage from '../../assets/graduation/McCauley_Cap_Throw.jpeg';
import aerialImage from '../../assets/aerial/budapest/budapest_aerial.jpeg';
import digitalImage from '../../assets/digital/x100/mirror_brushing.jpeg';
import filmImage from '../../assets/film/portra_160/beach_walk.jpeg';

import '../../css/photo/photo.scss'

// Animation component for each photo category
function AnimatedPhotoLink({ to, src, alt, label, index }: { to: string, src: string, alt: string, label: string, index: number }) {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <Link to={to}>
            <motion.div
                ref={ref}
                className="image-wrapper"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: [0.4, 0, 0.2, 1]
                }}
            >
                <img src={src} alt={alt} loading="lazy" />
                <div className="overlay">
                    <p>{label}</p>
                </div>
            </motion.div>
        </Link>
    );
}

function Photography() {
    const categories = [
        { to: "/grad", src: gradImage, alt: "Graduates", label: "Grad Photos" },
        { to: "/aerial", src: aerialImage, alt: "Aerial of Budapest", label: "Aerial" },
        { to: "/digital", src: digitalImage, alt: "Digital of friends", label: "Digital" },
        { to: "/film", src: filmImage, alt: "Film of people on a beach", label: "Film" },
        { to: "/published", src: coultureImage, alt: "Two women in front of a window with a sunset in the background", label: "Published work" },
    ];

    return (
        <div>
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Photography
            </motion.h1>

            <div className="image-container">
                {categories.map((category, index) => (
                    <AnimatedPhotoLink
                        key={category.to}
                        to={category.to}
                        src={category.src}
                        alt={category.alt}
                        label={category.label}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
}

export default Photography;
