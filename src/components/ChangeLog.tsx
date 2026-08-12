import React from 'react';
import { Link } from 'react-router-dom';

type Entry = { text: string; to?: string };
type Release = { date: string; entries: Entry[] };

const RELEASES: Release[] = [
    {
        date: 'August 12, 2026',
        entries: [
            { text: 'Shrink project screenshots so pages load faster', to: '/projects' },
            { text: 'Add link previews when pages are shared' },
            { text: 'Remove the unused chat page and clean out dead dependencies' },
        ],
    },
    {
        date: 'June 22, 2026',
        entries: [
            { text: 'New gallery components and photography layout', to: '/photography' },
            { text: 'Fix gallery hover shadow overflowing on mobile', to: '/photography' },
        ],
    },
    {
        date: 'May 22, 2026',
        entries: [
            { text: 'Deploy the site automatically on every push' },
        ],
    },
    {
        date: 'April 17, 2026',
        entries: [
            { text: 'Update experience and projects sections, add new assets', to: '/projects' },
        ],
    },
    {
        date: 'February 14, 2026',
        entries: [
            { text: 'Update copyright to 2026' },
            { text: 'Resolve dependency vulnerabilities' },
        ],
    },
    {
        date: 'January 24, 2026',
        entries: [
            { text: 'Redesign the about page', to: '/info' },
            { text: 'Refactor directory structure and clean up unused code' },
        ],
    },
    {
        date: 'November 26, 2025',
        entries: [
            { text: 'New projects page with snapping animations', to: '/projects' },
            { text: 'Update info page', to: '/info' },
        ],
    },
    {
        date: 'November 17, 2025',
        entries: [
            { text: 'Modernize the work experience page', to: '/work' },
            { text: 'Add a Fotodex redirect' },
        ],
    },
    {
        date: 'October 14, 2025',
        entries: [
            { text: 'Consistent gallery animations and a bento-box layout', to: '/photography' },
        ],
    },
    {
        date: 'October 13, 2025',
        entries: [
            { text: 'Add a modern redesign with smooth animations and borderless photos' },
            { text: 'Clean up codebase and fix code quality issues' },
        ],
    },
    {
        date: 'January 24, 2025',
        entries: [
            { text: 'Update booking information', to: '/book' },
            { text: 'Fix homepage', to: '/' },
            { text: 'Correct appearance of photos on special pages' },
        ],
    },
    {
        date: 'January 23, 2025',
        entries: [
            { text: 'Update graduation photo portfolio', to: '/grad' },
            { text: 'Complete some TODOs on formatting and user experience' },
        ],
    },
    {
        date: 'January 16, 2025',
        entries: [
            { text: 'Update copyright to 2025' },
            { text: 'Fix package.json to build and deploy the project locally with npm run deploy' },
            { text: 'Overhaul navigation UI and UX' },
            { text: 'Redesign photo container globally' },
            { text: 'Allow clicking on photos to expand on the Film page', to: '/film' },
            { text: 'Improve responsiveness and mobile experience' },
        ],
    },
    {
        date: 'December 27, 2023',
        entries: [
            { text: 'Switch booking registration to Calendly', to: '/book' },
            { text: 'Add placeholder text on unfinished pages' },
        ],
    },
    {
        date: 'December 18, 2023',
        entries: [
            { text: 'Add Centible information to Projects', to: '/projects' },
            { text: 'Update home page', to: '/' },
            { text: "There's a photo of me in Info now", to: '/info' },
            { text: 'Detach change log from homepage' },
            { text: 'Clean up CSS and code' },
            { text: 'Explore new photo display options' },
        ],
    },
    {
        date: 'December 13, 2023',
        entries: [
            { text: 'New animal to check out' },
            { text: 'Work section completed', to: '/work' },
            { text: 'Film photos added', to: '/film' },
        ],
    },
    {
        date: 'November 2, 2023',
        entries: [
            { text: 'Add analytics' },
            { text: 'Fix menu behavior on click' },
        ],
    },
    {
        date: 'October 31, 2023',
        entries: [
            { text: 'Improve dark mode' },
        ],
    },
    {
        date: 'October 30, 2023',
        entries: [
            { text: 'Update graduation page with photos', to: '/grad' },
            { text: 'Complete graduation photo preregistration form', to: '/book' },
            { text: 'Correct sizing issues for mobile devices', to: '/book' },
            { text: 'Add new work experience cover photo', to: '/experience' },
            { text: 'Add dark mode' },
        ],
    },
    {
        date: 'October 25, 2023',
        entries: [
            { text: 'Behind-the-scenes work implementing a backend using RedHat OpenShift' },
            { text: 'Add more work history' },
            { text: 'Change favicon' },
            { text: 'Add graduation photo preregistration form' },
            { text: 'Update photography page with new photos' },
        ],
    },
];

const PLANNED: string[] = [
    'Improve photo experience globally',
];

function ChangeLog() {
    return (
        <div className="log-wrap">
            <header className="log-head">
                <h1 className="log-title">Change Log</h1>
                <p className="log-sub">What&rsquo;s changed on this site</p>
            </header>

            {RELEASES.map(release => (
                <section className="log-release" key={release.date}>
                    <h2 className="log-date">{release.date}</h2>
                    <ul className="log-items">
                        {release.entries.map(entry => (
                            <li className="log-item" key={entry.text}>
                                {entry.to
                                    ? <Link className="log-link" to={entry.to}>{entry.text}</Link>
                                    : entry.text}
                            </li>
                        ))}
                    </ul>
                </section>
            ))}

            <section className="log-release log-upcoming">
                <h2 className="log-date">Planned</h2>
                <ul className="log-items">
                    {PLANNED.map(item => (
                        <li className="log-item" key={item}>{item}</li>
                    ))}
                </ul>
            </section>
        </div>
    );
}

export default ChangeLog;
