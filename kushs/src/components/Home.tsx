import React from 'react';

import { FaGithub } from 'react-icons/fa';
import { MdPublishedWithChanges } from "react-icons/md";

import '../css/footer.scss'
import '../css/link.scss'

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
                    This build was deployed December 14, 2023 at 1129 EST.
                </p>

            </header>
            <p>
                <h4>
                    Check out this animal!
                </h4>
                <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQLglv08LlfTQb9L1rHlxFIkSJ72agTTuhsLP3kB53unIwTtqaJ" alt="Axolotl" style={imageStyle} />
            </p>

        <div className="credit">
            <p>
                With love from NC (c) 2023 Kush Shah<br></br>
                <a href="https://github.com/kush2shah/website" target="_blank" rel="noopener noreferrer" className="icon-link">
                    <FaGithub />
                </a>
                <a href='/changelog' className="icon-link">
                    <MdPublishedWithChanges />
                </a>
            </p>

        </div>
        </div>
    );
}

export default Home;