import React from 'react';
import firebase from 'firebase/app';

import BudaCastle from '../../assets/aerial/budapest/buda_castle.jpeg';
import Budapest from '../../assets/aerial/budapest/budapest_aerial.jpeg'

import '../../css/photo.scss'

function Aerial() {
    return (
        <div>
            <div>
                <h1>Aerial</h1>
            </div>

            <div className="image-container">
                <div className="image-wrapper">
                    <img src={BudaCastle} alt="Buda Castle"/>
                    <div className="overlay">
                        <p>DJI Mavic Air 2 <br></br> Budapest, Hungary </p>
                    </div>
                </div>
                <div className="image-wrapper">
                    <img src={Budapest} alt="Budapest Aerial"/>
                    <div className="overlay">
                        <p>DJI Mavic Air 2<br></br>Budapest, Hungary</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Aerial;
