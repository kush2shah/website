import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { MdPublishedWithChanges } from "react-icons/md";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import '../css/global/footer.scss';
import '../css/home.scss';

import santorini from "../assets/aerial/greece/santorini.jpeg";
import centible from "../assets/experience/centible/centible_team.jpeg";

const Home: React.FC = () => {
    return (
        <div className="home">
            <motion.header
                className="home-header"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            >
                <h1>Kush Shah</h1>
            </motion.header>

            <div className="image-container">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
                >
                    <Link to="/photography" className="image-wrapper">
                        <img
                            src={santorini}
                            alt="Aerial of Santorini"
                            loading="eager"
                        />
                        <div className="overlay">
                            <p>Photo</p>
                        </div>
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
                >
                    <Link to="/experience" className="image-wrapper">
                        <img
                            src={centible}
                            alt="The Centible Team on launch day"
                            loading="eager"
                        />
                        <div className="overlay">
                            <p>Experience</p>
                        </div>
                    </Link>
                </motion.div>
            </div>

            <motion.footer
                className="credit"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
            >
                <p>
                    With love from NC (c) 2025 Kush Shah
                    <br />
                    <motion.a
                        href="https://github.com/kush2shah/website"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon-link"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <FaGithub />
                    </motion.a>
                    <motion.a
                        href="/changelog"
                        className="icon-link"
                        whileHover={{ scale: 1.2, rotate: -5 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <MdPublishedWithChanges />
                    </motion.a>
                </p>
            </motion.footer>
        </div>
    );
}

export default Home;