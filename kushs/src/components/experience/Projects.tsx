import React from 'react';

import '../../css/centible.scss'

import centible from '../../assets/experience/centible/centible_spending.jpeg'
function Projects() {
    return (
        <div>
            <h1>Projects</h1>
            <div className={'left-align'}>
                <a href='https://centible.app' className={'centible-link'}>
                    <h2>Centible</h2>
                </a>
                <h3>Team Lead and Product Manager</h3>
                <p>Centible is a spending tracker designed to help people build financial literacy.<br>
                </br>As Team Lead and Product Manager, I had the privilege of leading a team of 18 student
                developers, designers, product managers and marketing managers. I drove the execution of Alpha and Beta testing,
                defined the MVP, set team priorities and led our team to launch on the App Store.
                I did this by moving our team over to Agile development, encouraging team building and
                cohesion, and working towards creating a safe and welcoming environment where all voices
                are valued.</p>
                <p>Centible is available for download on the App Store for iOS devices in the US and Canada.</p>
                <div className={'image-container'}>
                    <img src={centible} alt={'A screenshot of Centible'}></img>
                </div>
            </div>
        </div>
    );
}

export default Projects;