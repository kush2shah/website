import React from 'react';
import gradImage from '../../assets/graduation/McCauley_Cap_Throw.jpeg';
import aerialImage from '../../assets/aerial/budapest/budapest_aerial.jpeg';
import digitalImage from '../../assets/digital/x100/mirror_brushing.jpeg';
import filmImage from '../../assets/film/portra_160/beach_walk.jpeg';

import '../../css/photo.scss'

function Photography() {
    return (
        <div>
            <h1>Photography</h1>
            <div>
                <h3>
                    What's in my camera bag?
                </h3>
                <p>I shoot with a SONY Alpha a7R III, Fujifilm FinePix X100, DJI Mavic Air 2, Nikon FE, and my iPhone 13 Pro Max.</p>
            </div>
            <div className="image-container">
            <a href="/grad">
                    <div className="image-wrapper">
                        <img src={gradImage} alt="Graduates" />
                        <div className="overlay">
                            <p>Grad Photos</p>
                        </div>
                    </div>
                </a>

                <a href="/aerial">
                    <div className="image-wrapper">
                        <img src={aerialImage} alt="Aerial of Budapest" />
                        <div className="overlay">
                            <p>Aerial</p>
                        </div>
                    </div>
                </a>
                
                <a href="/digital">
                    <div className="image-wrapper">
                        <img src={digitalImage} alt="Digital of friends" />
                        <div className="overlay">
                            <p>Digital</p>
                        </div>
                    </div>
                </a>
                
                <a href="/film">
                    <div className="image-wrapper">
                        <img src={filmImage} alt="Film of people on a beach" />
                        <div className="overlay">
                            <p>Film</p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default Photography;
