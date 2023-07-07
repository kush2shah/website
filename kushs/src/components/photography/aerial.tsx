import React from 'react';

import './photo.css'

function Aerial() {
    return (
        <div>
            <div>
                <h1>Aerial</h1>
            </div>

            <div className="image-container">
                <div className="image-wrapper">
                    <img src="https://kmsresources.blob.core.windows.net/$web/buda_castle.JPG" alt="Buda Castle" />
                    <div className="overlay">
                        <p>DJI Mavic Air 2 <br></br> Budapest, Hungary </p>
                    </div>
                </div>
                <div className="image-wrapper">
                    <img src="https://kmsresources.blob.core.windows.net/$web/budapest_aerial.jpg" alt="Budapest Aerial" />
                    <div className="overlay">
                        <p>Your second image's text</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Aerial;