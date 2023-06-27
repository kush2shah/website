import React from 'react';

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
            <a>
                Feel free to follow along by checking back regularly.
            </a>
        </header>
            <body>
                <h3>
                    Check out this animal!
                </h3>
                <img src="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcT565iw3g--MuK9rk0DvbL7l8mn0Fl50E-pO-927skg_Nl2xxemty4I_ErJGGMDLW_1js6PEZ0B15WAQg8" alt="capybara" style={imageStyle} />

            </body>
        <a>
            With love from NC (c) 2023 Kush Shah
        </a>
        </div>
    );
}

export default Home;