import React from 'react';

import {BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import NavBar from './NavBar';

import '../css/global/app.scss';
import '../css/global/TopButton.scss';
import '../css/global/redesign.scss';

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
        window.location.href = "https://kushah.notion.site/cc";
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

function RedirectToFotodex(){
    React.useEffect(() => {
        window.location.href = "https://testflight.apple.com/join/gaca1a8x";
    }, []);

    return null;
}

// Page transition variants
const pageVariants = {
    initial: {
        opacity: 0,
        y: 20,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease: [0.4, 0, 0.2, 1] as const,
        },
    },
    exit: {
        opacity: 0,
        y: -20,
        transition: {
            duration: 0.3,
            ease: [0.4, 0, 0.2, 1] as const,
        },
    },
};

// Reset scroll position to the top whenever the route changes.
function ScrollToTop() {
    const { pathname } = useLocation();
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
}

// Wrapper component to handle animations
function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<PageWrapper><Home/></PageWrapper>}/>

                <Route path="/photography" element={<PageWrapper><Photography/></PageWrapper>}/>
                <Route path="/published" element={<PageWrapper><Published/></PageWrapper>}/>
                <Route path="/grad" element={<PageWrapper><Graduation/></PageWrapper>}/>
                <Route path="/book" element={<PageWrapper><Booking/></PageWrapper>}/>
                <Route path="/film" element={<PageWrapper><Film/></PageWrapper>}/>
                <Route path="/digital" element={<PageWrapper><Digital/></PageWrapper>}/>
                <Route path="/aerial" element={<PageWrapper><Aerial/></PageWrapper>}/>

                <Route path="/experience" element={<PageWrapper><Experience/></PageWrapper>}/>
                <Route path="/projects" element={<PageWrapper><Projects/></PageWrapper>}/>
                <Route path="/education" element={<PageWrapper><Education/></PageWrapper>}/>
                <Route path="/work" element={<PageWrapper><Work/></PageWrapper>}/>
                <Route path="/clubs" element={<PageWrapper><Clubs/></PageWrapper>}/>

                <Route path="/info" element={<PageWrapper><Info/></PageWrapper>}/>

                <Route path="/chat" element={<PageWrapper><Chat/></PageWrapper>}/>

                <Route path="/changelog" element={<PageWrapper><ChangeLog/></PageWrapper>}/>

                <Route path="*" element={<PageWrapper><NotFound/></PageWrapper>}/>

                <Route path="/datavizmod2" element={<RedirectToDataVizMod2 />} />
                <Route path="/datavizmod3" element={<TableauRedirect />} />
                <Route path="/cc" element={<RedirectToCreditCardGuide />} />
                <Route path="/app-terms" element={<RedirectToFlightAppTC />} />
                <Route path="/app-privacy" element={<RedirectToFlightAppPP />} />
                <Route path="/fotodex" element={<RedirectToFotodex />} />
            </Routes>
        </AnimatePresence>
    );
}

// Page wrapper for animations
function PageWrapper({ children }: { children: React.ReactNode }) {
    return (
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            {children}
        </motion.div>
    );
}

function App() {
    // Bake the redesign's default "tweaks" onto the body (the editor's Tweaks panel is dropped).
    React.useEffect(() => {
        document.body.dataset.weight = '200';
        document.body.dataset.card = 'line';
        document.body.dataset.logos = 'color';
    }, []);

    return (
        <div className="App">
            <Router>
                <ScrollToTop/>
                <NavBar/>
                <AnimatedRoutes />
            </Router>
        </div>
    );
}

export default App;
