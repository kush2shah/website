import React from 'react';

import {FaGithub} from 'react-icons/fa';
import {MdPublishedWithChanges} from "react-icons/md";

import '../css/global/footer.scss'
import '../css/global/link.scss'
import santorini from "../assets/aerial/greece/santorini.jpeg";
import gradImage from "../assets/graduation/McCauley_Cap_Throw.jpeg";
import centible from "../assets/experience/centible/centible_team.jpeg";
import digitalImage from "../assets/digital/x100/mirror_brushing.jpeg";
import filmImage from "../assets/film/portra_160/beach_walk.jpeg";

const Home: React.FC = () => {
    return (
        <div>
            <header className="Home-header">
                <h1>
                    Kush Shah
                </h1>
            </header>

            <div className="image-container">
                <a href="/photography">
                    <div className="image-wrapper">
                        <img src={santorini} alt="Two women in front of a window with a sunset in the background" />
                        <div className="overlay">
                            <p>Photo</p>
                        </div>
                    </div>
                </a>

                <a href="/experience">
                    <div className="image-wrapper">
                        <img src={centible} alt="Aerial of Budapest" />
                        <div className="overlay">
                            <p>Experience</p>
                        </div>
                    </div>
                </a>

                {/*<a href="/digital">*/}
                {/*    <div className="image-wrapper">*/}
                {/*        <img src={digitalImage} alt="Digital of friends" />*/}
                {/*        <div className="overlay">*/}
                {/*            <p>Digital</p>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</a>*/}

                {/*<a href="/film">*/}
                {/*    <div className="image-wrapper">*/}
                {/*        <img src={filmImage} alt="Film of people on a beach" />*/}
                {/*        <div className="overlay">*/}
                {/*            <p>Film</p>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</a>*/}
            </div>

                <div className="credit">
                    <p>
                        With love from NC (c) 2023 Kush Shah<br></br>
                        <a href="https://github.com/kush2shah/website" target="_blank" rel="noopener noreferrer"
                           className="icon-link">
                            <FaGithub/>
                        </a>
                        <a href='/changelog' className="icon-link">
                            <MdPublishedWithChanges/>
                        </a>
                    </p>

                </div>
            </div>
    );
}

export default Home;