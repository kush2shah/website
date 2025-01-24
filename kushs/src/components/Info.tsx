import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import { TiSocialInstagram } from 'react-icons/ti';
import headshot from '../assets/digital/a7/headshot.jpeg';

const Info: React.FC = () => {
    return (
        <div className="Info">
            <header className="Info-header">
                <div className="featured-image featured-image--small">
                    <div className="featured-image__wrapper">
                        <img src={headshot} alt="Me in front of the Old Well" />
                    </div>
                </div>
                <h1>Kush Shah</h1>
                <p>
                    Hey there, thanks for checking out my website. I built this from scratch using React.js, TypeScript, and SCSS.
                    <br/>
                    I am a student at UNC Chapel Hill studying Computer Science and Business Administration, with a minor in Philosophy, Politics, and Economics.
                    <br/>
                    In my professional life, I'm passionate about building things for people to use, and talking to them about how they use them.
                    I strive to understand the people I'm building for, and to make their lives
                    better through the products I create.
                    <br/>
                    When I'm left with time to myself, I fill it taking photos of the people and the world around me, travelling the world, listening to music, and
                    playing with different technologies. I enjoy going outside and exploring the world around me, striving to do something each day that pushes me outside my
                    comfort zone. I'd love to chat with you about any of these things, so feel free to reach out!
                </p>
                <div className="social-links">
                    <a href="https://www.linkedin.com/in/kushsha/"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="icon-link">
                        <FaLinkedinIn size={64} />
                    </a>
                    <a href="https://www.instagram.com/kushspictures/"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="icon-link">
                        <TiSocialInstagram size={64} />
                    </a>
                </div>
            </header>
        </div>
    );
}

export default Info;