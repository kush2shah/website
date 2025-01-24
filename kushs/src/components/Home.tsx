import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { MdPublishedWithChanges } from "react-icons/md";

import '../css/global/footer.scss';
import '../css/home.scss';

import santorini from "../assets/aerial/greece/santorini.jpeg";
import centible from "../assets/experience/centible/centible_team.jpeg";

const Home: React.FC = () => {
    return (
        <div className="home">
            <header className="home-header">
                <h1>Kush Shah</h1>
            </header>

            <div className="image-container">
                <a href="/photography" className="image-wrapper">
                    <img
                        src={santorini}
                        alt="Aerial of Santorini"
                    />
                    <div className="overlay">
                        <p>Photo</p>
                    </div>
                </a>

                <a href="/experience" className="image-wrapper">
                    <img
                        src={centible}
                        alt="The Centible Team on launch day"
                    />
                    <div className="overlay">
                        <p>Experience</p>
                    </div>
                </a>
            </div>

            <footer className="credit">
                <p>
                    With love from NC (c) 2025 Kush Shah
                    <br />
                    <a
                        href="https://github.com/kush2shah/website"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon-link"
                    >
                        <FaGithub />
                    </a>
                    <a href="/changelog" className="icon-link">
                        <MdPublishedWithChanges />
                    </a>
                </p>
            </footer>
        </div>
    );
}

export default Home;