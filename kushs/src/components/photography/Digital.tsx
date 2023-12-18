import React from 'react';
import firebase from 'firebase/app';

import brushing from '../../assets/digital/x100/mirror_brushing.jpeg';
import hannah from '../../assets/digital/x100/mirror_hannah.jpeg';
import ggb from '../../assets/digital/a7/golden_gate.jpeg'
import balboa from '../../assets/digital/a7/balboa.jpeg'

import '../../css/photo.scss'

function Digital() {
    return (
        <div>
            <h1>Digital</h1>

            <div className="image-container">
                <div className="image-wrapper">
                    <img src={balboa} alt="Black and white photo of someone brushing"/>
                    <div className="overlay">
                        <p>Sony a7R III + FE 24-70 f/2.8 GM<br></br> San Diego, CA </p>
                    </div>
                </div>

                <div className="image-wrapper">
                    <img src={ggb} alt="The Golden Gate Bridge"/>
                    <div className="overlay">
                        <p>Sony a7R III + FE 16-35 f/2.8 GM<br></br> San Francisco, CA </p>
                    </div>
                </div>
                <div className="image-wrapper">
                    <img src={brushing} alt="Black and white photo of someone brushing"/>
                    <div className="overlay">
                        <p>FUJIFILM FinePix X100<br></br> Chapel Hill, NC </p>
                    </div>
                </div>
                <div className="image-wrapper">
                    <img src={hannah} alt="Black and white photo of someone getting ready"/>
                    <div className="overlay">
                        <p>FUJIFILM FinePix X100<br></br>Chapel Hill, NC</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Digital;
