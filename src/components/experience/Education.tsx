import React from 'react';
import gradImage from '../../assets/digital/a7/grad_pic.jpeg';

const Education: React.FC = () => {
    return (
        <div>
            <div className="section-header"><span className="section-title">Education</span></div>
            <div className="edu-wrap">
                <div className="edu-featured">
                    <img src={gradImage} alt="Me in the stands of Kenan Stadium" />
                </div>
                <div className="edu-content">
                    <div className="edu-school">
                        <h2 className="edu-name">University of North Carolina<br />at Chapel Hill</h2>
                        <p className="edu-year">Class of 2024</p>
                    </div>
                    <div className="edu-degree">
                        <p className="edu-degree-line">BS Business Administration &amp; Computer Science</p>
                        <p className="edu-degree-line">Minor in Philosophy, Politics and Economics</p>
                        <p className="edu-degree-line">Graduate with Distinction</p>
                    </div>
                    <div className="edu-bio">
                        <p>
                            In May 2024, I graduated from UNC Chapel Hill and Kenan-Flagler Business School with a
                            Bachelor of Science in Business Administration, Bachelor of Arts in Computer Science, and a
                            minor in Philosophy, Politics, and Economics with distinction.
                        </p>
                        <p>
                            While at UNC, I was a board member of Scale and Coin Business Society and App Team Carolina,
                            as well as a contributor for Coulture Magazine, Philosophy Club, and volunteered during
                            COVID-19 as a COVID tester with the UNC COVID Student Services Corps.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;
