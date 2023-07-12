import React from 'react';
import firebase from 'firebase/app';

import brushing from '../../assets/digital/x100/mirror_brushing.jpeg';
import hannah from '../../assets/digital/x100/mirror_hannah.jpeg';

import '../../css/photo.css'

function Digital() {
    return (
        <div>
            <h1>Digital</h1>

            <div className="image-container">
                <div className="image-wrapper">
                    <img src={brushing} alt="Black and white photo of someone brushing" />
                    <div className="overlay">
                        <p>FUJIFILM FinePix X100<br></br> Chapel Hill, NC </p>
                    </div>
                </div>
                <div className="image-wrapper">
                    <img src={hannah} alt="Budapest Aerial" />
                    <div className="overlay">
                        <p>DJI Mavic Air 2<br></br>Budapest, Hungary</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Digital;