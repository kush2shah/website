import React from 'react';

function ChangeLog() {
    return (
        <div>
            <h1>
                Change Log
            </h1>
            <p>
                <h4>December 18, 2023</h4>
                <a href={'/projects'} className={'link'}>
                    - Add Centible information to Projects<br></br>
                </a>
                <a href={'/'} className={'link'}>
                    - Update home page<br></br>
                </a>
                <a href={'/info'} className={'link'}>
                    - There's a photo of me in info now!<br></br>
                </a>
                - Detach change log from homepage<br></br>
                - Clean up CSS and code<br></br>
                - Explored new photo display options<br/>

                <h4>December 13, 2023</h4>
                - New animal to check out!<br></br>
                <a href={'/work'} className={'link'}>
                    - Work section completed<br></br>
                </a>
                <a href={'/film'} className={'link'}>
                    Film photos added<br></br>
                </a>
                <h4>November 2, 2023</h4>
                - Add analytics<br></br>
                - Fix menu behavior on click<br></br>
                <h4>October 31, 2023</h4>
                - Improve dark mode<br></br>
                <h4>October 30, 2023</h4>
                <a href='/grad' className='link'>
                    - Update graduation page with photos<br></br>
                </a>
                <a href='/book' className='link'>
                    - Complete graduation photo preregistration form<br></br>
                    - Correct sizing issues for mobile devices<br></br>
                </a>
                <a href='/experience' className='link'>
                    - Add new Work experience cover photo<br></br>
                </a>
                - Add dark mode

            </p>
            <p>
                <h4>October 25, 2023</h4>
                - Behind the scenes work of implementing a backend using RedHat OpenShift<br></br>
                - Added more work history<br></br>
                - Change favicon <br></br>
                - Add graduation photo preregistration form<br></br>
                - Update photography page with new photos<br></br>
            </p>
        </div>
    );
}

export default ChangeLog;