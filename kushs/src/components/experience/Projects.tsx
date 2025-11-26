import React, { useState, useEffect } from 'react';

import '../../css/experience/centible.scss'
import '../../css/experience/apperture.scss'
import '../../css/experience/flightTracky.scss'
import '../../css/experience/fotodex.scss'

import centibleSpending from '../../assets/experience/centible/centible_spending.jpeg'
import centibleLogo from '../../assets/experience/centible/centible_logo.png'
import centibleOnboard from '../../assets/experience/centible/centible_onboard.png'
import centibleInbox from '../../assets/experience/centible/centible_inbox.png'
import centibleCustomization from '../../assets/experience/centible/centible_customization.png'

import flightAppIcon from '../../assets/experience/projects/flightapp.png'
import flightAppIconDark from '../../assets/experience/projects/flightapp-dark.png'
import flightHomeDark from '../../assets/experience/projects/flight-app-screenshots/home-dark.PNG'
import flightHomeLight from '../../assets/experience/projects/flight-app-screenshots/home-light.PNG'
import flightOnboardingDark from '../../assets/experience/projects/flight-app-screenshots/onboarding-dark.PNG'
import flightOnboardingLight from '../../assets/experience/projects/flight-app-screenshots/onboarding-light.PNG'
import flightSearchDark from '../../assets/experience/projects/flight-app-screenshots/search-dark.PNG'
import flightSearchLight from '../../assets/experience/projects/flight-app-screenshots/search-light.PNG'
import flightDetailDark from '../../assets/experience/projects/flight-app-screenshots/flight-dark.PNG'
import flightDetailLight from '../../assets/experience/projects/flight-app-screenshots/flight-light.PNG'

import fotodexIcon from '../../assets/experience/projects/fotodex.png'
import fotodexIconDark from '../../assets/experience/projects/fotodex-dark.png'
import fotodexHomeDark from '../../assets/experience/projects/fotodex-screenshots/home-dark.PNG'

import appStoreBadgeLight from '../../assets/experience/projects/appstore-light.svg'
import appStoreBadgeDark from '../../assets/experience/projects/appstore-dark.svg'
import testFlightBadge from '../../assets/experience/projects/testflight.png'
import fotodexHomeLight from '../../assets/experience/projects/fotodex-screenshots/home-light.PNG'
import fotodexScanDark from '../../assets/experience/projects/fotodex-screenshots/scan-dark.PNG'
import fotodexScanLight from '../../assets/experience/projects/fotodex-screenshots/scan-light.PNG'
import fotodexScanResultDark from '../../assets/experience/projects/fotodex-screenshots/scan-result-dark.PNG'
import fotodexScanResultLight from '../../assets/experience/projects/fotodex-screenshots/scan-result-light.PNG'
import fotodexPicDark from '../../assets/experience/projects/fotodex-screenshots/pic-dark.PNG'
import fotodexPicLight from '../../assets/experience/projects/fotodex-screenshots/pic-light.PNG'

function Projects() {
    // Initialize dark mode based on system preference
    const [isDarkMode, setIsDarkMode] = useState(() => {
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    // Listen for system preference changes
    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

        const handleChange = (e: MediaQueryListEvent) => {
            setIsDarkMode(e.matches);
        };

        // Add event listener
        mediaQuery.addEventListener('change', handleChange);

        // Cleanup
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    return (
        <div>
            <h1>Projects</h1>
            <div className={'left-align'}>
                <div className={'image-container-mini'}>
                    <div className={'image-wrapper-mini'}>
                        <img src={centibleLogo} alt={'A screenshot of Centible'}></img>
                    </div>
                </div>
                <a className={'centible-link'} href="https://appteamcarolina.com" target="_blank" rel="noopener noreferrer">
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
                    target="_blank"
                    rel="noopener noreferrer"
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
                        src={isDarkMode ? appStoreBadgeDark : appStoreBadgeLight}
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
                        <img src={isDarkMode ? flightAppIconDark : flightAppIcon} alt={'FlightTracky app icon'}></img>
                    </div>
                </div>
                <h2 className={'flightTracky-link'}>FlightTracky</h2>
                <h3>Creator and Developer</h3>
                <p>FlightTracky is a mobile app that helps aviation enthusiasts track flights, explore routes, and discover aircraft information.<br></br>
                As the sole creator and developer, I designed and built the entire app from the ground up using SwiftUI and SwiftData.
                The app features real-time flight tracking, detailed aircraft information, route visualization, and a personalized awards system
                to gamify the flight tracking experience. I implemented a clean, modern UI that adapts seamlessly between light and dark modes,
                ensuring an optimal viewing experience in any lighting condition.</p>
                <a
                    href="https://apps.apple.com/us/app/flighttracky/id6751276217"
                    target="_blank"
                    rel="noopener noreferrer"
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
                        src={isDarkMode ? appStoreBadgeDark : appStoreBadgeLight}
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
                        <img src={isDarkMode ? flightOnboardingDark : flightOnboardingLight} alt={'FlightTracky onboarding screen'}></img>
                    </div>
                    <div className={'image-wrapper-mini'}>
                        <img src={isDarkMode ? flightHomeDark : flightHomeLight} alt={'FlightTracky home screen'}></img>
                    </div>
                    <div className={'image-wrapper-mini'}>
                        <img src={isDarkMode ? flightSearchDark : flightSearchLight} alt={'FlightTracky search screen'}></img>
                    </div>
                    <div className={'image-wrapper-mini'}>
                        <img src={isDarkMode ? flightDetailDark : flightDetailLight} alt={'FlightTracky flight details screen'}></img>
                    </div>
                </div>
            </div>
            <br></br><br></br>

            <div className={'left-align'}>
                <div className={'image-container-mini'}>
                    <div className={'image-wrapper-mini'}>
                        <img src={isDarkMode ? fotodexIconDark : fotodexIcon} alt={'Fotodex app icon'}></img>
                    </div>
                </div>
                <h2 className={'fotodex-link'}>Fotodex</h2>
                <h3>Co-Creator and Product Lead</h3>
                <p>Fotodex is a mobile app designed to help photographers identify camera equipment and research photography techniques through AI-powered lens and camera scanning.<br></br>
                This product was ideated from a need for a high-quality platform where photographers could quickly identify equipment and learn about its capabilities.
                Rather than manually searching through databases, Fotodex uses machine learning to instantly recognize camera bodies and lenses, providing detailed specifications,
                compatibility information, and sample imagery. Photographers can build their personal equipment collection, discover what settings to use for similar photos,
                and research lenses that work with their camera bodies.<br></br>
                I led product vision, defined the MVP, conducted market research, and collaborated closely with developer Sam Gilmore throughout the development process.</p>
                <a
                    href="https://testflight.apple.com/join/gaca1a8x"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        display: 'inline-block'
                    }}
                >
                    <img
                        src={testFlightBadge}
                        alt="Join the Beta on TestFlight"
                        style={{
                            height: '40px',
                            width: 'auto',
                            display: 'block',
                            marginLeft: '20px'
                        }}
                    />
                </a>
                <div className={'image-container-mini'}>
                    <div className={'image-wrapper-mini'}>
                        <img src={isDarkMode ? fotodexHomeDark : fotodexHomeLight} alt={'Fotodex home screen'}></img>
                    </div>
                    <div className={'image-wrapper-mini'}>
                        <img src={isDarkMode ? fotodexScanDark : fotodexScanLight} alt={'Fotodex camera scanning screen'}></img>
                    </div>
                    <div className={'image-wrapper-mini'}>
                        <img src={isDarkMode ? fotodexScanResultDark : fotodexScanResultLight} alt={'Fotodex scan results'}></img>
                    </div>
                    <div className={'image-wrapper-mini'}>
                        <img src={isDarkMode ? fotodexPicDark : fotodexPicLight} alt={'Fotodex equipment details'}></img>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;