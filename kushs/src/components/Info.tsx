import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import { TiSocialInstagram } from 'react-icons/ti';

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
            <a href="https://www.linkedin.com/in/kushsha/" target="_blank" rel="noopener noreferrer" className='icon-link'>
                <FaLinkedinIn size={64} />
            </a>
            
            <a href="https://www.instagram.com/kushspictures/" target="_blank" rel="noopener noreferrer" className="icon-link">
                <TiSocialInstagram size={64} />
            </a>
        </header>
        </div>
    );
}

export default Info;