import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Info from './Info';
import NavBar from './NavBar';
import './App.css';
import Analog from "./photography/analog";
import Photography from "./photography/photography";

function App() {
  return (
    <div className="App">
        <Router>
        <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path={'/photography'} element={<Photography />} />
              <Route path="/analog" element={<Analog />} />
            <Route path="/info" element={<Info />} />

          </Routes>
        </Router>
        
    </div>
  );
}

export default App;
