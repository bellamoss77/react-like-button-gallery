import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import LandscapeGallery from './components/LandscapeGallery';
import NatureGallery from './components/NatureGallery';
import AnimalGallery from './components/AnimalGallery';
import RuinsGallery from './components/RuinsGallery';
import './App.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <header className='App-header'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/landscape" element={<LandscapeGallery />} />
            <Route path="/nature" element={<NatureGallery />} />
            <Route path="/pets" element={<AnimalGallery />} />
            <Route path="/ruins" element={<RuinsGallery />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
