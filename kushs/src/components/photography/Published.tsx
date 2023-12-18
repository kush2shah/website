import React from 'react';

import coulture from '../../assets/digital/a6600/Coulture.jpeg'

function Published() {
    return (
        <div>
            <h1>Published work</h1>
            <div className={'image-container'}>
                <div className={'image-wrapper'}>
                    <img src={coulture} alt={'Two women in front of a sunset'}/>
                </div>
            </div>
        </div>
    );
}

export default Published;