import React from 'react';

function ChangeLog() {
    return (
        <div>
            <h1>
                Change Log
            </h1>
            <p>
                <h4>Jan 16, 2025</h4>
                - Update copyright to 2025<br/>
                - Fix package.json to build and deploy project locally using npm run deploy<br/>
                - Overhaul Navigation UI and UX <br/>
                - Redesign photo container globally<br/>
                <a href={'/film'} className={'link'}>
                    - Allow clicking on photos to expand on Film page <br/>
                </a>
                - Improve responsiveness and mobile experience<br/>
                #TODO: update work experience section<br/>
                #TODO: update booking information<br/>
                #TODO: improve photo experience globally<br/>
                #TODO: fix homepage<br/>

                <h4>December 27, 2023</h4>
                <a href={'/book'} className={'link'}>
                    - Switch booking registration to a Calendly<br/>
                </a>
                <p>Add placeholder text on unfinished pages</p>
                <h4>December 18, 2023</h4>
                <a href={'/projects'} className={'link'}>
                    - Add Centible information to Projects<br/>
                </a>
                <a href={'/'} className={'link'}>
                    - Update home page<br/>
                </a>
                <a href={'/info'} className={'link'}>
                    - There's a photo of me in info now!<br/>
                </a>
                - Detach change log from homepage<br/>
                - Clean up CSS and code<br/>
                - Explored new photo display options<br/>

                <h4>December 13, 2023</h4>
                - New animal to check out!<br/>
                <a href={'/work'} className={'link'}>
                    - Work section completed<br/>
                </a>
                <a href={'/film'} className={'link'}>
                    Film photos added<br/>
                </a>
                <h4>November 2, 2023</h4>
                - Add analytics<br/>
                - Fix menu behavior on click<br/>
                <h4>October 31, 2023</h4>
                - Improve dark mode<br/>
                <h4>October 30, 2023</h4>
                <a href='/grad' className='link'>
                    - Update graduation page with photos<br/>
                </a>
                <a href='/book' className='link'>
                    - Complete graduation photo preregistration form<br/>
                    - Correct sizing issues for mobile devices<br/>
                </a>
                <a href='/experience' className='link'>
                    - Add new Work experience cover photo<br/>
                </a>
                - Add dark mode

            </p>
            <p>
                <h4>October 25, 2023</h4>
                - Behind the scenes work of implementing a backend using RedHat OpenShift<br/>
                - Added more work history<br/>
                - Change favicon <br/>
                - Add graduation photo preregistration form<br/>
                - Update photography page with new photos<br/>
            </p>
        </div>
    );
}

export default ChangeLog;