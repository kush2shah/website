import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedinIn } from 'react-icons/fa';
import { TiSocialInstagram } from 'react-icons/ti';
import headshot from '../assets/digital/a7/headshot.jpeg';
import '../css/info.scss';

const Info: React.FC = () => {
    return (
        <div className="info">
            <div className="info-container">
                <motion.div
                    className="info-hero"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                >
                    <motion.div
                        className="headshot-wrapper"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
                    >
                        <img src={headshot} alt="Kush Shah in front of the Old Well" />
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    >
                        Kush Shah
                    </motion.h1>

                    <motion.p
                        className="subtitle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        I take photos, build things, and travel
                    </motion.p>
                </motion.div>

                <motion.div
                    className="info-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
                >
                    <p className="intro">
                        Hey there, thanks for checking out my website. I built this from scratch using React.js, TypeScript, and SCSS.
                    </p>

                    <p>
                        I'm a Product Manager at Bandwidth, where I own A2P Messaging, a product that enables
                        businesses to reach their clients via SMS and MMS using local phone numbers.
                    </p>

                    <p>
                        At UNC Chapel Hill, I studied Computer Science and Business Administration,
                        with a minor in Philosophy, Politics, and Economics.
                    </p>

                    <p>
                        I'm passionate about building things for people to use, and talking
                        to them about how they use them. I enjoy understanding the people I'm building for, and
                        improving their lives through the products I create.
                    </p>

                    <p>
                        When I'm left with time to myself, I fill it taking photos of the people and the world around me,
                        travelling the world, listening to music, and playing with different technologies. I enjoy going
                        outside and exploring the world around me, striving to do something each day that pushes me outside
                        my comfort zone.
                    </p>

                    <p className="cta">
                        I'd love to chat with you about any of these things, so feel free to reach out!
                    </p>
                </motion.div>

                <motion.div
                    className="social-links"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <motion.a
                        href="https://www.linkedin.com/in/kushsha/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                        whileHover={{ scale: 1.1, y: -4 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <FaLinkedinIn size={32} />
                        <span>LinkedIn</span>
                    </motion.a>
                    <motion.a
                        href="https://www.instagram.com/kushspictures/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                        whileHover={{ scale: 1.1, y: -4 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <TiSocialInstagram size={32} />
                        <span>Instagram</span>
                    </motion.a>
                </motion.div>
            </div>
        </div>
    );
}

export default Info;