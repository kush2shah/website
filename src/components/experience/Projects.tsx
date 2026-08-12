import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

import centibleIcon from '../../assets/experience/projects/centible.webp';
import centibleOnboardDark from '../../assets/experience/projects/centible-screenshots/onboard-dark.webp';
import centibleOnboardLight from '../../assets/experience/projects/centible-screenshots/onboard-light.webp';
import centibleCurveDark from '../../assets/experience/projects/centible-screenshots/curve-dark.webp';
import centibleCurveLight from '../../assets/experience/projects/centible-screenshots/curve-light.webp';
import centibleInboxDark from '../../assets/experience/projects/centible-screenshots/inbox-dark.webp';
import centibleInboxLight from '../../assets/experience/projects/centible-screenshots/inbox-light.webp';
import centibleCustomizationDark from '../../assets/experience/projects/centible-screenshots/customization-dark.webp';
import centibleCustomizationLight from '../../assets/experience/projects/centible-screenshots/customization-light.webp';

import flightAppIcon from '../../assets/experience/projects/flightapp.webp';
import flightAppIconDark from '../../assets/experience/projects/flightapp-dark.webp';
import flightHomeDark from '../../assets/experience/projects/flight-app-screenshots/home-dark.webp';
import flightHomeLight from '../../assets/experience/projects/flight-app-screenshots/home-light.webp';
import flightOnboardingDark from '../../assets/experience/projects/flight-app-screenshots/onboarding-dark.webp';
import flightOnboardingLight from '../../assets/experience/projects/flight-app-screenshots/onboarding-light.webp';
import flightSearchDark from '../../assets/experience/projects/flight-app-screenshots/search-dark.webp';
import flightSearchLight from '../../assets/experience/projects/flight-app-screenshots/search-light.webp';
import flightDetailDark from '../../assets/experience/projects/flight-app-screenshots/flight-dark.webp';
import flightDetailLight from '../../assets/experience/projects/flight-app-screenshots/flight-light.webp';

import rollganizerIcon from '../../assets/experience/projects/rollganizer.webp';
import rollganizerIconDark from '../../assets/experience/projects/rollganizer-dark.webp';
import rollganizerAppDark from '../../assets/experience/projects/rollganizer-screenshots/rollganizer-app-dark.webp';
import rollganizerAppLight from '../../assets/experience/projects/rollganizer-screenshots/rollganizer-app-light.webp';

import fotodexIcon from '../../assets/experience/projects/fotodex.webp';
import fotodexIconDark from '../../assets/experience/projects/fotodex-dark.webp';
import fotodexHomeDark from '../../assets/experience/projects/fotodex-screenshots/home-dark.webp';
import fotodexHomeLight from '../../assets/experience/projects/fotodex-screenshots/home-light.webp';
import fotodexScanDark from '../../assets/experience/projects/fotodex-screenshots/scan-dark.webp';
import fotodexScanLight from '../../assets/experience/projects/fotodex-screenshots/scan-light.webp';
import fotodexScanResultDark from '../../assets/experience/projects/fotodex-screenshots/scan-result-dark.webp';
import fotodexScanResultLight from '../../assets/experience/projects/fotodex-screenshots/scan-result-light.webp';
import fotodexPicDark from '../../assets/experience/projects/fotodex-screenshots/pic-dark.webp';
import fotodexPicLight from '../../assets/experience/projects/fotodex-screenshots/pic-light.webp';

import bandwidthIcon from '../../assets/experience/projects/bandwidth.png';
import bandwidthWebsite from '../../assets/experience/projects/bandwidth-cli-screenshots/website.webp';

import appStoreBadgeLight from '../../assets/experience/projects/appstore-light.svg';
import appStoreBadgeDark from '../../assets/experience/projects/appstore-dark.svg';
import macAppStoreBadgeLight from '../../assets/experience/projects/macappstore-light.svg';
import macAppStoreBadgeDark from '../../assets/experience/projects/macappstore-dark.svg';
import testFlightBadge from '../../assets/experience/projects/testflight.png';

type Project = {
    name: string;
    href?: string;
    color: string;
    role: string;
    icon: string;
    desc: React.ReactNode;
    badge?: { img: string; href: string; alt: string };
    screens: string[];
    wide?: boolean;
    actions?: React.ReactNode;
};

// Fade each project in from the back as it scrolls into view.
const fadeInVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] },
    },
};

function ProjectSection({ p }: { p: Project }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, amount: 0.15 });

    return (
        <motion.section
            ref={ref}
            className="project-section"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeInVariants}
        >
            <div className="project-content">
                <div className="project-icon">
                    <img src={p.icon} alt={`${p.name} icon`} />
                </div>
                <h2 className="project-name" style={{ '--proj-color': p.color } as React.CSSProperties}>
                    {p.href ? (
                        <a href={p.href} target="_blank" rel="noopener noreferrer">{p.name}</a>
                    ) : p.name}
                </h2>
                <p className="project-role-label">{p.role}</p>
                <p className="project-desc">{p.desc}</p>

                {p.actions}
                {p.badge && (
                    <a href={p.badge.href} target="_blank" rel="noopener noreferrer" className="project-badge">
                        <img src={p.badge.img} alt={p.badge.alt} />
                    </a>
                )}

                <div className={`project-screens${p.wide ? ' wide' : ''}`}>
                    {p.screens.map((s, j) => (
                        <div key={j} className="screen-wrap">
                            <img src={s} alt={`${p.name} screenshot`} loading="lazy" />
                        </div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}

function Projects() {
    const [isDarkMode, setIsDarkMode] = useState(
        () => window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    );

    useEffect(() => {
        const mq = window.matchMedia('(prefers-color-scheme: dark)');
        const onChange = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
        mq.addEventListener('change', onChange);
        return () => mq.removeEventListener('change', onChange);
    }, []);

    const [installCopied, setInstallCopied] = useState(false);
    const handleCopyInstall = () => {
        navigator.clipboard.writeText('brew install Bandwidth/tap/band');
        setInstallCopied(true);
        setTimeout(() => setInstallCopied(false), 2000);
    };

    const d = isDarkMode;

    const bandwidthActions = (
        <div className="project-actions">
            <button
                type="button"
                className="install-command"
                onClick={handleCopyInstall}
                aria-label="Copy install command: brew install Bandwidth/tap/band"
            >
                <code><span className="prompt">$</span> brew install Bandwidth/tap/band</code>
                <span className="copy-icon" aria-hidden="true">
                    {installCopied ? (
                        <svg viewBox="0 0 16 16" focusable="false">
                            <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L1.72 8.78a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z" />
                        </svg>
                    ) : (
                        <svg viewBox="0 0 16 16" focusable="false">
                            <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z" />
                            <path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z" />
                        </svg>
                    )}
                </span>
            </button>
            <a
                className="github-button"
                href="https://github.com/Bandwidth/cli"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Bandwidth CLI on GitHub"
            >
                <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                </svg>
                <span>View on GitHub</span>
            </a>
        </div>
    );

    const projects: Project[] = [
        {
            name: 'Bandwidth CLI',
            href: 'https://dev.bandwidth.com/tools/cli/',
            color: '#2D6CDF',
            role: 'Creator and Developer',
            icon: bandwidthIcon,
            desc: (
                <>
                    Bandwidth CLI (<code>band</code>) is a command-line tool for managing phone numbers, voice calls,
                    and messaging directly from the terminal — built for humans and agent-native by design. As the
                    creator and developer, I designed and built <code>band</code> in Go to replace clicking through
                    dashboards with fast, scriptable commands: number search and provisioning, voice and SMS/MMS, BXML
                    call control, recording and transcription, and 10DLC/toll-free verification — with clean JSON output
                    and idempotent operations safe to drop into scripts and AI agent workflows.
                </>
            ),
            actions: bandwidthActions,
            screens: [bandwidthWebsite],
            wide: true,
        },
        {
            name: 'Centible',
            href: 'https://appteamcarolina.com',
            color: '#8068f3',
            role: 'Team Lead and Product Manager',
            icon: centibleIcon,
            desc: "Centible is a spending tracker designed to help people build financial literacy. As Team Lead and Product Manager, I led a team of 18 student developers, designers, product managers and marketers — driving Alpha and Beta testing, defining the MVP, setting team priorities, and launching on the App Store using a modified Agile process built around a safe, welcoming environment where all voices are valued.",
            badge: { img: d ? appStoreBadgeDark : appStoreBadgeLight, href: 'https://apps.apple.com/us/app/centible/id6443507950', alt: 'Download on the App Store' },
            screens: [
                d ? centibleOnboardDark : centibleOnboardLight,
                d ? centibleCurveDark : centibleCurveLight,
                d ? centibleInboxDark : centibleInboxLight,
                d ? centibleCustomizationDark : centibleCustomizationLight,
            ],
        },
        {
            name: 'FlightTracky',
            color: '#FFD100',
            role: 'Creator and Developer',
            icon: d ? flightAppIconDark : flightAppIcon,
            desc: "FlightTracky is a mobile app that helps anyone track flights, explore routes, and discover aircraft information. As the sole creator and developer, I built the entire app from the ground up in SwiftUI, integrating the seats.aero Partner API for award seat searches, FlightAware's AeroAPI for real-time flight data, and Amadeus for live pricing.",
            badge: { img: d ? appStoreBadgeDark : appStoreBadgeLight, href: 'https://apps.apple.com/us/app/flighttracky/id6751276217', alt: 'Download on the App Store' },
            screens: [
                d ? flightOnboardingDark : flightOnboardingLight,
                d ? flightHomeDark : flightHomeLight,
                d ? flightSearchDark : flightSearchLight,
                d ? flightDetailDark : flightDetailLight,
            ],
        },
        {
            name: 'Rollganizer',
            color: '#4A90D9',
            role: 'Creator and Developer',
            icon: d ? rollganizerIconDark : rollganizerIcon,
            desc: "Rollganizer is a native macOS app that helps photographers track their editing progress across photo collections. As the sole creator and developer, I built it from the ground up in SwiftUI. Rollganizer scans your photo directories and intelligently detects which RAW files have been edited — checking for XMP sidecars, format conversions, and version numbering — giving you a clear view of what's left to edit.",
            badge: { img: d ? macAppStoreBadgeDark : macAppStoreBadgeLight, href: 'https://apps.apple.com/us/app/rollganizer/id6756248977?mt=12', alt: 'Download on the Mac App Store' },
            screens: [d ? rollganizerAppDark : rollganizerAppLight],
            wide: true,
        },
        {
            name: 'Fotodex',
            color: '#B8A5E8',
            role: 'Co-Creator and Product Lead',
            icon: d ? fotodexIconDark : fotodexIcon,
            desc: "Fotodex is a mobile app designed to help photographers make sense of their gear and what it can do. Rather than manually searching through databases, Fotodex scans your photo metadata to automatically identify equipment, build a personal gear collection, and discover compatible lenses. I led product vision, defined the MVP, conducted market research, and collaborated closely with developer Sam Gilmore throughout prototyping.",
            badge: { img: testFlightBadge, href: 'https://testflight.apple.com/join/gaca1a8x', alt: 'Join the Beta on TestFlight' },
            screens: [
                d ? fotodexHomeDark : fotodexHomeLight,
                d ? fotodexScanDark : fotodexScanLight,
                d ? fotodexScanResultDark : fotodexScanResultLight,
                d ? fotodexPicDark : fotodexPicLight,
            ],
        },
    ];

    return (
        <div className="projects-wrap">
            {projects.map((p, i) => (
                <ProjectSection key={i} p={p} />
            ))}
        </div>
    );
}

export default Projects;
