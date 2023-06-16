import React from 'react';
import LinkedInLogo from '../assets/linkedin.png'

const Info: React.FC = () => {
    return (
        <div className="Info">
        <header className="Info-header">
            <h1>
                Kush Shah
            </h1>
            <p>
                Howdy! I am a Senior at the University of North Carolina
                at Chapel Hill studying Computer Science and Business.
            </p>
            <a href="https://www.linkedin.com/in/kushsha/" target="_blank" rel="noopener noreferrer">
                <img src='https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg' alt="LinkedIn" className="logo" />
            </a>
            <a href="https://www.instagram.com/kushspictures/" target="_blank" rel="noopener noreferrer">
                <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" alt="Instagram" className="logo" />
            </a>
        </header>
        </div>
    );
}

export default Info;