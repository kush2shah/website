import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';

import '../css/app.scss';
import '../css/TopButton.scss';
import 'react-photo-view/dist/react-photo-view.css';

import Home from './Home';

import Photography from "./photography/Photography";
import Awards from "./photography/Awards";
import Graduation from './photography/Graduation';
import Booking from "./photography/Booking";
import Film from "./photography/Film";
import Digital from "./photography/Digital";
import Aerial from "./photography/Aerial";

import Experience from "./experience/Experience";
import Education from "./experience/Education";
import Work from "./experience/Work";
import Clubs from "./experience/Clubs";

import Info from './Info';

import ChangeLog from './ChangeLog';

import NotFound from './errors/NotFound';

import TopButton from "./TopButton";



function App() {

    interface AppProps {
        darkMode: boolean;
    }

    const [darkMode, setDarkMode] = React.useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
      };



      return (
        <div className="App">
            <Router>
            <NavBar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/photography" element={<Photography />} />
                  <Route path="/awards" element={<Awards />} />
                  <Route path="/grad" element={<Graduation />} />
                    <Route path="/book" element={<Booking />} />
                  <Route path="/film" element={<Film />} />
                  <Route path="/digital" element={<Digital />} />
                  <Route path="/aerial" element={<Aerial />} />
                <Route path="/experience" element={<Experience />} />
                  <Route path="/education" element={<Education />} />
                  <Route path="/work" element={<Work />} />
                  <Route path="/clubs" element={<Clubs />} />
                <Route path="/info" element={<Info />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/changelog" element={<ChangeLog />} />
              </Routes>
            </Router>
            {/*<div className={".top-btn"}>
                <TopButton />
            </div>*/}
        </div>
      );
}

export default App;
