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
                Feel free to follow along by clicking the menu links. <br></br>
                This build was deployed August 30, 2023 at 1:47AM EST.
            </p>
        </header>
            <p>
                <h3>
                    Check out this animal!
                </h3>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Red_Panda_%2824986761703%29.jpg/1920px-Red_Panda_%2824986761703%29.jpg" alt="Red panda on a tree branch" style={imageStyle} />
            </p>
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