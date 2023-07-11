import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import '../css/App.css';

import Home from './Home';

import Photography from "./photography/photography";
import Analog from "./photography/analog";
import Digital from "./photography/digital";
import Aerial from "./photography/aerial";

import Experience from "./experience/experience";
import Education from "./experience/education";
import Work from "./experience/work";
import Clubs from "./experience/clubs";

import Info from './Info';

import NotFound from './errors/notfound';

function App() {
  return (
    <div className="App">
        <Router>
        <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/photography" element={<Photography />} />
              <Route path="/film" element={<Analog />} />
              <Route path="/digital" element={<Digital />} />
              <Route path="/aerial" element={<Aerial />} />
            <Route path="/experience" element={<Experience />} />
              <Route path="/education" element={<Education />} />
              <Route path="/work" element={<Work />} />
              <Route path="/clubs" element={<Clubs />} />
            <Route path="/info" element={<Info />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
        
    </div>
  );
}

export default App;
