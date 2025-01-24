import React from 'react';
import gradImage from '../../assets/digital/a7/grad_pic.jpeg';

const Education: React.FC = () => {
    return (
        <div>
            <h1>Education</h1>
            <div className="featured-image">
                <div className="featured-image__wrapper">
                    <img src={gradImage} alt="Me in the stands of Kenan Stadium" />
                </div>
            </div>
            <div className="education">
                <h2>University of North Carolina at Chapel Hill<br />Class of 2024</h2>
                <h4>
                    Bachelor of Science in Business Administration and Computer Science<br />
                    Minor in Philosophy, Politics and Economics<br />
                    Graduate with Distinction
                </h4>
                <p>
                    In May 2024, I graduated from UNC Chapel Hill and Kenan-Flagler Business School with a Bachelor of
                    Science in Business Administration, Bachelor of Arts in Computer Science, and a minor in Philosophy,
                    Politics, and Economics with distinction.
                </p>
                <p>
                    While at UNC, I was a board member of Scale and Coin Business Society and App Team Carolina, as well
                    as a contributor for Coulture Magazine, Philosophy Club, and volunteered during COVID-19 as a COVID
                    tester with the UNC COVID Student Services Corps.
                </p>
            </div>
        </div>
    );
}

export default Education;