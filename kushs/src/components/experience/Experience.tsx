import React from 'react';

import wt from '../../assets/experience/wt_shoot.jpeg'
import climbing from '../../assets/experience/climbing.jpeg'
import kenan from '../../assets/experience/kenan.jpeg'

import '../../css/photo.scss'
function Experience() {
    return (
        <div>
            <h1>Experience</h1>

            <div className="image-container">
                <a href="/work">
                    <div className='image-wrapper'>
                        <img src={wt} alt='WillowTree employees talking with each other' />
                            <div className='overlay'>
                                <p>Work</p>
                            </div>
                    </div>
                </a>
                <a href="/education">
                    <div className='image-wrapper'>
                        <img src={kenan} alt='Kenan stadium' />
                            <div className='overlay'>
                                <p>Education</p>
                            </div>
                    </div>
                </a>
                <a href="/clubs">
                    <div className='image-wrapper'>
                        <img src={climbing} alt='Me climbing at Pilot Mountain' />
                            <div className='overlay'>
                                <p>Other experience</p>
                            </div>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default Experience;
