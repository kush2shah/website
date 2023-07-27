import React from 'react';

import '../../css/work.css'
import cisco from '../../assets/logos/cisco_logo.png'

function Work() {
    return (
        <div className='work'>
            <div>
                <h1>Work Experience</h1>
            </div>
            <div className='willowtree'>
                <h2>WillowTree</h2>
                <h3>Product Analyst Intern</h3>
                <p>
                    As a product analyst at WillowTree, I worked on a project for a major telecommunications company. Throughout my time
                    in this role, I learned the ins and outs of the agile development process, writing user stories and acceptance criteria
                    using Figma and Jira, writing tickets for software developers and test engineers, communicating with the client daily,
                    and working with a team of 10+ people to deliver a product that meets the client's needs.
                </p>
            </div>

            <div className='cisco'>
                <img src={cisco}></img>
                <br></br>
                <h3>Marketing Specialist</h3>
                {/* <h2>Cisco Systems</h2> */}
                <p>
                    My primary project in this role was creating the holy grail on Influencer Marketing campaigns, 
                    particularly, how a B2B corporation like Cisco can embrace and use this novel kind of marketing to 
                    their advantage. Throughout the summer, I would compile research that I accumulated through interviews 
                    with other executives, learning user habits on social media, and aggregating data from social media 
                    websites on usage and audience of a particular post type to build out what an effective campaign for
                    Cisco would look like. The culmination of this project was a solo presentation delivered to 30+ 
                    members of the Marketing Senior Leadership Team, which included VPs and Directors from various business functions.
                </p>
                <p>
                    Another project my fellow interns and I got to participate in was the creation of an organic 
                    social media strategy for Cisco to pursue for the Instagram platform. This presentation was broadcast 
                    live from San Jose, California to 500+ members of the Cisco Marketing division.
                </p>
            </div>
        </div>
    );
}

export default Work;