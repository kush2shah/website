import React from 'react';

import '../../css/experience/centible.scss'
import '../../css/experience/apperture.scss'

import centibleSpending from '../../assets/experience/centible/centible_spending.jpeg'
import centibleLogo from '../../assets/experience/centible/centible_logo.png'
import centibleOnboard from '../../assets/experience/centible/centible_onboard.png'
import centibleInbox from '../../assets/experience/centible/centible_inbox.png'
import centibleCustomization from '../../assets/experience/centible/centible_customization.png'

import unfinishedApp from '../../assets/experience/unfinished_app_icon.png'
import appertureHome from '../../assets/experience/apperture/apperture_home.jpeg'
import apperturePost from '../../assets/experience/apperture/apperture_post.png'

function Projects() {
    return (
        <div>
            <h1>Projects</h1>
            <div className={'left-align'}>
                <div className={'image-container-mini'}>
                    <div className={'image-wrapper-mini'}>
                        <img src={centibleLogo} alt={'A screenshot of Centible'}></img>
                    </div>
                </div>
                <a className={'centible-link'}>
                    <h2>Centible</h2>
                </a>
                <h3>Team Lead and Product Manager</h3>
                <p>Centible is a spending tracker designed to help people build financial literacy.<br>
                </br>As Team Lead and Product Manager, I had the privilege of leading a team of 18 student
                    developers, designers, product managers and marketing managers. I drove the execution of Alpha and
                    Beta testing,
                    defined the MVP, set team priorities and led our team to launch on the App Store.
                    I did this by moving our team over to a modified Agile process, encouraging team building and
                    cohesion, and working towards creating a safe and welcoming environment where all voices
                    are valued.</p>
                <a
                    href="https://apps.apple.com/us/app/centible/id6443507950?itsct=apps_box_badge&amp;itscg=30200"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        overflow: 'hidden',
                        borderRadius: '13px',
                        width: '250px',
                        height: '83px'
                    }}
                >
                    <img
                        src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1682035200"
                        alt="Download on the App Store"
                        style={{
                            borderRadius: '13px',
                            width: '150px',
                            height: '63px',
                            marginLeft: '20px'
                        }}
                    />
                </a>
                <div className={'image-container-mini'}>
                    <div className={'image-wrapper-mini'}>
                        <img src={centibleOnboard} alt={'A screenshot of Centible'}></img>
                    </div>
                    <div className={'image-wrapper-mini'}>
                        <img src={centibleSpending} alt={'A screenshot of Centible'}></img>
                    </div>
                    <div className={'image-wrapper-mini'}>
                        <img src={centibleInbox} alt={'A screenshot of Centible'}></img>
                    </div>
                    <div className={'image-wrapper-mini'}>
                        <img src={centibleCustomization} alt={'A screenshot of Centible'}></img>
                    </div>
                </div>
            </div>
            <br></br><br></br>

            <div className={'left-align'}>
                <div className={'image-container-mini'}>
                    <div className={'image-wrapper-mini'}>
                        <img src={unfinishedApp} alt={'A screenshot of Centible'}></img>
                    </div>
                </div>
                <a className={'apperture'}>
                    <h2>Apperture</h2>
                </a>
                <h3>Co-Creator</h3>
                <p>Apperture is a mobile app intended to help photographers research and share photography.<br>
                </br>This product was ideated from a need for a high quality platform where photographers could share photos
                with each other, but rather than focus on the social element, Apperture allows them to focus on the
                metadata. Photographers can research and learn about lenses that work on their camera body, different
                strengths in different models, and what settings they should use to capture similar photos.<br></br>
                I ideated and worked on product vision, defining the MVP, and market research, while the app was programmed by
                Sam Gilmore.</p>
                <div className={'image-container-mini'}>
                    <div className={'image-wrapper-mini'}>
                        <img src={appertureHome} alt={'A screenshot of Apperture\'s home page'}></img>
                    </div>
                    <div className={'image-wrapper-mini'}>
                        <img src={apperturePost} alt={'A screenshot of a post on Apperture'}></img>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;