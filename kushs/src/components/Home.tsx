import React from 'react';

import { FaGithub } from 'react-icons/fa';

const Home: React.FC = () => {
    const imageStyle = {
        width: "200px",
        height: 'auto',
    }
    return (
        <div className="Home">
        <header className="Home-header">
            <h1>
            Hey there, I'm building this website from scratch right now.
            </h1>
            <p>
                Feel free to follow along by checking back regularly. <br></br>
                This build was deployed July 27, 2023 at 9:49PM EST.
            </p>
        </header>
            <body>
                <h3>
                    Check out this animal!
                </h3>
                <img src="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcT565iw3g--MuK9rk0DvbL7l8mn0Fl50E-pO-927skg_Nl2xxemty4I_ErJGGMDLW_1js6PEZ0B15WAQg8" alt="capybara" style={imageStyle} />
            </body>
        <p>
            With love from NC (c) 2023 Kush Shah
        </p>
            <a href="https://github.com/kush2shah/website" target="_blank" rel="noopener noreferrer" className="icon-link">
                <FaGithub />
            </a>
        </div>
    );
}

export default Home;