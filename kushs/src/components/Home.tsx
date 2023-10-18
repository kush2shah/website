import React from 'react';

import { FaGithub } from 'react-icons/fa';
import '../css/home.scss'

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
                    This build was deployed September 1, 2023 at 7:13 PM EST.
                </p>

            </header>
            <p>
                <h3>
                    Check out this animal!
                </h3>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Red_Panda_%2824986761703%29.jpg/1920px-Red_Panda_%2824986761703%29.jpg" alt="Red panda on a tree branch" style={imageStyle} />
            </p>
            <h3>
                Change Log
            </h3>
            <p>
                - Fixed mobile navigation bug where the menu would overlay every page<br></br>
                - Fixed menu appearing to the side on mobile<br></br>
                - Added skeleton of Graduation booking form<br></br>
            </p>
        <div className="credit">
            <p>
                With love from NC (c) 2023 Kush Shah<br></br>
                <a href="https://github.com/kush2shah/website" target="_blank" rel="noopener noreferrer" className="icon-link">
                    <FaGithub />
                </a>
            </p>

        </div>
        </div>
    );
}

export default Home;