import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import '../css/app.css';

import Home from './Home';

import Photography from "./photography/Photography";
import Film from "./photography/Film";
import Digital from "./photography/Digital";
import Aerial from "./photography/Aerial";

import Experience from "./experience/Experience";
import Education from "./experience/Education";
import Work from "./experience/Work";
import Clubs from "./experience/Clubs";

import Info from './Info';

import NotFound from './errors/NotFound';

function App() {
  return (
    <div className="App">
        <Router>
        <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/photography" element={<Photography />} />
              <Route path="/film" element={<Film />} />
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
