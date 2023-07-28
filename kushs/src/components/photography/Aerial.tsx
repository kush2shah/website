import React from 'react';
import firebase from 'firebase/app';
import { app, analytics } from '../../firebase/firebase';

import BudaCastle from '../../assets/aerial/buda_castle.jpeg';
import Budapest from '../../assets/aerial/budapest_aerial.jpeg'

import '../../css/photo.css'

function Aerial() {
    return (
        <div>
            <div>
                <h1>Aerial</h1>
            </div>

            <div className="image-container">
                <div className="image-wrapper">
                    <img src={BudaCastle} alt="Buda Castle" />
                    <div className="overlay">
                        <p>DJI Mavic Air 2 <br></br> Budapest, Hungary </p>
                    </div>
                </div>
                <div className="image-wrapper">
                    <img src={Budapest} alt="Budapest Aerial" />
                    <div className="overlay">
                        <p>DJI Mavic Air 2<br></br>Budapest, Hungary</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Aerial;
