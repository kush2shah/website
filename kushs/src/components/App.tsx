import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Info from './Info';
import NavBar from './NavBar';
import './App.css';

import Photography from "./photography/photography";
import Analog from "./photography/analog";
import Digital from "./photography/digital";
import Aerial from "./photography/aerial";

import Experience from "./experience/experience";
import Education from "./experience/education";
import Work from "./experience/work";
import Clubs from "./experience/clubs";


function App() {
  return (
    <div className="App">
        <Router>
        <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/photography" element={<Photography />} />
              <Route path="/analog" element={<Analog />} />
              <Route path="/digital" element={<Digital />} />
              <Route path="/aerial" element={<Aerial />} />
            <Route path="/experience" element={<Experience />} />
              <Route path="/education" element={<Education />} />
              <Route path="/work" element={<Work />} />
              <Route path="/clubs" element={<Clubs />} />
            <Route path="/info" element={<Info />} />


          </Routes>
        </Router>
        
    </div>
  );
}

export default App;
