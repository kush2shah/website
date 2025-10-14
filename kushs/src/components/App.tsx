import React from 'react';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from './NavBar';

import '../css/global/app.scss';
import '../css/global/TopButton.scss';

import Home from './Home';

import Photography from "./photography/Photography";
import Published from "./photography/Published";
import Graduation from './photography/Graduation';
import Booking from "./photography/Booking";
import Film from "./photography/Film";
import Digital from "./photography/Digital";
import Aerial from "./photography/Aerial";

import Experience from "./experience/Experience";
import Projects from "./experience/Projects";
import Work from "./experience/Work";
import Education from "./experience/Education";
import Clubs from "./experience/Clubs";

import Info from './Info';

import ChangeLog from './ChangeLog';

import Chat from './ai/Chat';

import NotFound from './errors/NotFound';

import TableauRedirect from './TableauRedirect';

function RedirectToDataVizMod2() {
    React.useEffect(() => {
        window.location.href = "https://colab.research.google.com/drive/1jZlqFIYKMHGCoYCdT3DD6tbj19S0aUi5?usp=sharing";
    }, []);

    return null;
}

function RedirectToCreditCardGuide() {
    React.useEffect(() => {
        window.location.href = "https://kushah.notion.site/";
    }, []);

    return null;
}

function RedirectToFlightAppTC() {
    React.useEffect(() => {
        window.location.href = "https://kushah.notion.site/flight-app-tc";
    }, []);

    return null;
}

function RedirectToFlightAppPP() {
    React.useEffect(() => {
        window.location.href = "https://kushah.notion.site/flight-app-pp";
    }, []);

    return null;
}

function App() {
    return (
        <div className="App">
            <Router>
                <NavBar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>

                    <Route path="/photography" element={<Photography/>}/>
                    <Route path="/published" element={<Published/>}/>
                    <Route path="/grad" element={<Graduation/>}/>
                    <Route path="/book" element={<Booking/>}/>
                    <Route path="/film" element={<Film/>}/>
                    <Route path="/digital" element={<Digital/>}/>
                    <Route path="/aerial" element={<Aerial/>}/>

                    <Route path="/experience" element={<Experience/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                    <Route path="/education" element={<Education/>}/>
                    <Route path="/work" element={<Work/>}/>
                    <Route path="/clubs" element={<Clubs/>}/>

                    <Route path="/info" element={<Info/>}/>

                    <Route path="/chat" element={<Chat/>}/>

                    <Route path="/changelog" element={<ChangeLog/>}/>

                    <Route path="*" element={<NotFound/>}/>

                    <Route path="/datavizmod2" element={<RedirectToDataVizMod2 />} />
                    <Route path="/datavizmod3" element={<TableauRedirect />} />
                    <Route path="/cc" element={<RedirectToCreditCardGuide />} />
                    <Route path="/app-terms" element={<RedirectToFlightAppTC />} />
                    <Route path="/app-privacy" element={<RedirectToFlightAppPP />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
