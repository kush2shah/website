import React, { useEffect, useRef } from 'react';

import cisco from '../../assets/logos/cisco_logo.png';
import wt from '../../assets/logos/wt_logo.svg';
import trc from '../../assets/logos/trc_logo.png';
import netapp from '../../assets/logos/netapp_logo.png';

type Experience = {
    company: string;
    co: string;
    logo: string;
    role: string;
    period: string;
    desc: string[];
};

function Work() {
    const listRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!listRef.current) return;
        const els = listRef.current.querySelectorAll('.work-item');
        const io = new IntersectionObserver((entries) => {
            entries.forEach((e, i) => {
                if (e.isIntersecting) {
                    setTimeout(() => e.target.classList.add('visible'), i * 80);
                    io.unobserve(e.target);
                }
            });
        }, { threshold: 0.1 });
        els.forEach(el => io.observe(el));
        return () => io.disconnect();
    }, []);

    const items: Experience[] = [
        {
            company: 'WillowTree',
            co: 'willowtree',
            logo: wt,
            role: 'Product Analyst Intern',
            period: 'Summer 2023',
            desc: [
                "As a product analyst at WillowTree, I worked on developing a novel flagship mobile application for a major telecommunications company. Throughout my time in this role, I learned the ins and outs of the agile development process, writing user stories and acceptance criteria using Figma and Jira, writing tickets for software developers and test engineers, communicating with the client daily, and working with a team of 10+ people to deliver a product that meets the client's needs. I used data driven insights and models to prioritize features and build tickets. References for this role are available on LinkedIn.",
            ],
        },
        {
            company: 'Cisco Systems',
            co: 'cisco',
            logo: cisco,
            role: 'Marketing Specialist',
            period: 'Summer 2022',
            desc: [
                "My primary project in this role was creating the holy grail on Influencer Marketing campaigns, particularly, how a B2B corporation like Cisco can embrace and use this novel kind of marketing to their advantage. Throughout the summer, I would compile research that I accumulated through interviews with other executives, learning user habits on social media, and aggregating data from social media websites on usage and audience of a particular post type to build out what an effective campaign for Cisco would look like. The culmination of this project was a solo presentation delivered to 30+ members of the Marketing Senior Leadership Team, which included VPs and Directors from various business functions.",
                "Another project my fellow interns and I got to participate in was the creation of an organic social media strategy for Cisco to pursue for the Instagram platform. This presentation was broadcast live from San Jose, California to 500+ members of the Cisco Marketing division.",
            ],
        },
        {
            company: 'NetApp',
            co: 'netapp',
            logo: netapp,
            role: 'Customer Success and Sales Analytics Intern',
            period: 'Summer 2021',
            desc: [
                "At my first internship, I learned how to contribute to a professional team. I worked hard throughout the summer on improving the effectiveness of Customer Success outreach by developing a new, weighted health score for CSMs to reach out to the most critical customers. To do this, I analysed a dataset of over 600,000 data points that were refreshed daily.",
            ],
        },
        {
            company: 'Triangle Rock Club',
            co: 'trc',
            logo: trc,
            role: 'Competition and Club Team Coach',
            period: '2020 – 2023',
            desc: [
                "Working as a climbing coach has been one of the most rewarding professional experiences I've gotten the privilege to work in. Our Team is ranked 9th in the nation- a huge feat considering the growing popularity of climbing after its inclusion as an Olympic sport. As a climber who grew up in the program I now work as a coach for, I have had firsthand experience with the nuances of the program, and assumed the role of coach to make the experience one that I as a climber would've appreciated.",
                "Little things I do to achieve this include making sure the climbers know why we are doing the drills we're doing by asking them what they feel like they're getting out of it, using feedback from athletes to build practices, and making sure our climbers have the same supportive, inclusive environment that I would've needed to thrive.",
                "I'm proud of my impact as a coach for this team, helping to lead 5 climbers from having no climbing experience to qualifying for national championships. I also led the entirety of a 25+ climber program for 6 months, designing and carrying out practice agendas for newer climbers interested in developing the fundamentals necessary to train with our competition team. When we began to take on more staff for this program, I was responsible for onboarding them and walking them through how to coach our climbers, as well as creating many resources (including agendas and a planner document) for them to reference.",
            ],
        },
    ];

    return (
        <div>
            <div className="section-header"><span className="section-title">Work Experience</span></div>
            <div className="work-list" ref={listRef}>
                {items.map((item, i) => (
                    <div key={i} className="work-item" data-co={item.co}>
                        <img className="work-logo" src={item.logo} alt={item.company} />
                        <div className="work-info">
                            <div className="work-meta">
                                <span className="work-company">{item.company}</span>
                                <span className="work-period">{item.period}</span>
                            </div>
                            <div className="work-role">{item.role}</div>
                            {item.desc.map((d, j) => <p key={j} className="work-desc">{d}</p>)}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Work;
