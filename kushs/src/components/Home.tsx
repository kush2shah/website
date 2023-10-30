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
                    This build was deployed October 30, 2023 at 0025 EST.
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
                <h4>October 30, 2023</h4>
                <a href='/grad' className='link'>
                    - Update graduation page with photos<br></br>
                </a>
                <a href='/book' className='link'>
                    - Complete graduation photo preregistration form<br></br>
                    - Correct sizing issues for mobile devices<br></br>
                </a>
                <a href='/experience' className='link'>
                    - Add new Work experience cover photo<br></br>
                </a>
                - Add dark mode

            </p>
            <p>
                <h4>October 25, 2023</h4>
                - Behind the scenes work of implementing a backend using RedHat OpenShift<br></br>
                - Added more work history<br></br>
                - Change favicon <br></br>
                - Add graduation photo preregistration form<br></br>
                - Update photography page with new photos<br></br>
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