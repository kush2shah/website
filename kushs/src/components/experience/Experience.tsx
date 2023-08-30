import React from 'react';

import wt from '../../assets/experience/wt_library.jpeg'

import '../../css/photo.css'
function Experience() {
    return (
        <div>
            <h1>Experience</h1>

            <div className="image-container">
                <a href="/work">
                    <div className='image-wrapper'>
                        <img src={wt} alt='WillowTree office' />
                            <div className='overlay'>
                                <p>Work</p>
                            </div>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default Experience;
