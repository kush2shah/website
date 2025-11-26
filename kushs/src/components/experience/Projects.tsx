import React, {useState, useEffect, useRef} from 'react';
import { motion, useInView } from 'framer-motion';

import '../../css/experience/projects.scss'

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

    // Fade in from back animation variants
    const fadeInVariants = {
        hidden: {
            opacity: 0,
            scale: 0.95,
            y: 20
        },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.4, 0, 0.2, 1] as [number, number, number, number]
            }
        }
    };

    // Refs for intersection observers
    const centibleRef = useRef(null);
    const flightTrackyRef = useRef(null);
    const fotodexRef = useRef(null);

    // First section should be immediately visible, others trigger on scroll
    const centibleInView = true; // Always show first section
    const flightTrackyInView = useInView(flightTrackyRef, { once: true, amount: 0.1 });
    const fotodexInView = useInView(fotodexRef, { once: true, amount: 0.1 });

    return (
        <div className="projects-gallery">
            {/* Centible Section */}
            <motion.section
                ref={centibleRef}
                className="project-section"
                initial="hidden"
                animate={centibleInView ? "visible" : "hidden"}
                variants={fadeInVariants}
            >
                <div className="project-content">
                    <div className="project-header">
                        <div className="project-icon">
                            <img src={centibleLogo} alt="Centible app icon" />
                        </div>
                        <h2 className="project-title">
                            <a className="centible-link" href="https://appteamcarolina.com" target="_blank" rel="noopener noreferrer">
                                Centible
                            </a>
                        </h2>
                        <h3 className="project-role">Team Lead and Product Manager</h3>
                    </div>

                    <p className="project-description">
                        Centible is a spending tracker designed to help people build financial literacy.<br/>
                        As Team Lead and Product Manager, I had the privilege of leading a team of 18 student
                        developers, designers, product managers and marketing managers. I drove the execution of Alpha and
                        Beta testing, defined the MVP, set team priorities and led our team to launch on the App Store.
                        I did this by moving our team over to a modified Agile process, encouraging team building and
                        cohesion, and working towards creating a safe and welcoming environment where all voices
                        are valued.
                    </p>

                    <div className="project-badge">
                        <a
                            href="https://apps.apple.com/us/app/centible/id6443507950?itsct=apps_box_badge&amp;itscg=30200"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={isDarkMode ? appStoreBadgeDark : appStoreBadgeLight}
                                alt="Download on the App Store"
                            />
                        </a>
                    </div>

                    <div className="screenshot-gallery">
                        <div className="screenshot-wrapper">
                            <img src={centibleOnboard} alt="Centible onboarding screen" />
                        </div>
                        <div className="screenshot-wrapper">
                            <img src={centibleSpending} alt="Centible spending tracker" />
                        </div>
                        <div className="screenshot-wrapper">
                            <img src={centibleInbox} alt="Centible inbox" />
                        </div>
                        <div className="screenshot-wrapper">
                            <img src={centibleCustomization} alt="Centible customization" />
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* FlightTracky Section */}
            <motion.section
                ref={flightTrackyRef}
                className="project-section"
                initial="hidden"
                animate={flightTrackyInView ? "visible" : "hidden"}
                variants={fadeInVariants}
            >
                <div className="project-content">
                    <div className="project-header">
                        <div className="project-icon">
                            <img src={isDarkMode ? flightAppIconDark : flightAppIcon} alt="FlightTracky app icon" />
                        </div>
                        <h2 className="project-title flightTracky-link">FlightTracky</h2>
                        <h3 className="project-role">Creator and Developer</h3>
                    </div>

                    <p className="project-description">
                        FlightTracky is a mobile app that helps anyone track flights, explore routes, and discover aircraft
                        information.<br/>
                        As the sole creator and developer, I designed and built the entire app from the ground up using
                        SwiftUI. I leverage the seats.aero Partner API for award seat searches, FlightAware's AeroAPI for
                        real-time flight data, and Amadeus for live pricing. This app answers the question, what would I
                        want my flight tracker to be able to do?
                    </p>

                    <div className="project-badge">
                        <a
                            href="https://apps.apple.com/us/app/flighttracky/id6751276217"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={isDarkMode ? appStoreBadgeDark : appStoreBadgeLight}
                                alt="Download on the App Store"
                            />
                        </a>
                    </div>

                    <div className="screenshot-gallery">
                        <div className="screenshot-wrapper">
                            <img
                                src={isDarkMode ? flightOnboardingDark : flightOnboardingLight}
                                alt="FlightTracky onboarding screen"
                            />
                        </div>
                        <div className="screenshot-wrapper">
                            <img
                                src={isDarkMode ? flightHomeDark : flightHomeLight}
                                alt="FlightTracky home screen"
                            />
                        </div>
                        <div className="screenshot-wrapper">
                            <img
                                src={isDarkMode ? flightSearchDark : flightSearchLight}
                                alt="FlightTracky search screen"
                            />
                        </div>
                        <div className="screenshot-wrapper">
                            <img
                                src={isDarkMode ? flightDetailDark : flightDetailLight}
                                alt="FlightTracky flight details screen"
                            />
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Fotodex Section */}
            <motion.section
                ref={fotodexRef}
                className="project-section"
                initial="hidden"
                animate={fotodexInView ? "visible" : "hidden"}
                variants={fadeInVariants}
            >
                <div className="project-content">
                    <div className="project-header">
                        <div className="project-icon">
                            <img src={isDarkMode ? fotodexIconDark : fotodexIcon} alt="Fotodex app icon" />
                        </div>
                        <h2 className="project-title fotodex-link">Fotodex</h2>
                        <h3 className="project-role">Co-Creator and Product Lead</h3>
                    </div>

                    <p className="project-description">
                        Fotodex is a mobile app designed to help photographers make sense of their gear and what it can
                        do.<br/>
                        This product was ideated from a need for a high-quality platform where photographers could quickly
                        identify equipment and learn about its capabilities.
                        Rather than manually searching through databases, Fotodex scans your photo metadata to automatically
                        put it in the right place. Photographers can build their personal equipment collection,
                        discover what settings to use for similar photos, and research lenses that work with
                        their camera bodies.<br/>
                        I led product vision, defined the MVP, conducted market research, and collaborated closely with
                        developer Sam Gilmore throughout the prototyping process.
                    </p>

                    <div className="project-badge">
                        <a
                            href="https://testflight.apple.com/join/gaca1a8x"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={testFlightBadge}
                                alt="Join the Beta on TestFlight"
                            />
                        </a>
                    </div>

                    <div className="screenshot-gallery">
                        <div className="screenshot-wrapper">
                            <img
                                src={isDarkMode ? fotodexHomeDark : fotodexHomeLight}
                                alt="Fotodex home screen"
                            />
                        </div>
                        <div className="screenshot-wrapper">
                            <img
                                src={isDarkMode ? fotodexScanDark : fotodexScanLight}
                                alt="Fotodex camera scanning screen"
                            />
                        </div>
                        <div className="screenshot-wrapper">
                            <img
                                src={isDarkMode ? fotodexScanResultDark : fotodexScanResultLight}
                                alt="Fotodex scan results"
                            />
                        </div>
                        <div className="screenshot-wrapper">
                            <img
                                src={isDarkMode ? fotodexPicDark : fotodexPicLight}
                                alt="Fotodex equipment details"
                            />
                        </div>
                    </div>
                </div>
            </motion.section>
        </div>
    );
}

export default Projects;