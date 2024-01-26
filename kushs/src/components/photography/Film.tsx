import React from 'react';
import lake from "../../assets/film/gold_200/lake.jpeg";
import balance from "../../assets/film/gold_200/balance.jpeg";
import madison from "../../assets/film/gold_200/madison.jpeg";
import glimmer from "../../assets/film/gold_200/glimmer.jpeg";

import '../../css/global/left-align.scss'

function Film() {
    return (
        <div>
            <h1>Film</h1>
            <h5>All photos shot on Nikon FE with a Micro-NIKKOR 55mm f/2.8 lens</h5>

            <div className={'left-align'}>
                <h3>Kodak Gold 200</h3>
                <div className="image-container">
                    <div className="image-wrapper">
                        <img src={lake} alt="A blue lake with mountains in the background" />
                        <div className="overlay">
                            <p>Rocky Mountain National Park</p>
                        </div>
                    </div>
                    <div className="image-wrapper">
                        <img src={madison} alt="Madison taking a photo of the water" />
                        <div className="overlay">
                            <p>Rocky Mountain National Park</p>
                        </div>
                    </div>
                    <div className="image-wrapper">
                        <img src={balance} alt="Person walking along a log on the water" />
                        <div className="overlay">
                            <p>Rocky Mountain National Park</p>
                        </div>
                    </div>
                    <div className="image-wrapper">
                        <img src={glimmer} alt="Defocused view of a lake and mountains" />
                        <div className="overlay">
                            <p>Rocky Mountain National Park</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Film;