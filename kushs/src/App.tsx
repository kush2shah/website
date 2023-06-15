import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import NavBar from './Navigation';
import './App.css';

function App() {
  return (
    <div className="App">
        <Router>
        <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/info" element={<Home />} />
          </Routes>
        </Router>
        
    </div>
  );
}

export default App;
