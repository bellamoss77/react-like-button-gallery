import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import LandscapeGallery from './components/LandscapeGallery';
import NatureGallery from './components/NatureGallery';
import NatureGallery2 from './components/NatureGallery2';
import LandscapeGallery2 from './components/LandscapeGallery2';
import PetsGallery from './components/PetsGallery';
import PetsGallery2 from './components/PetsGallery2';
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
            <Route path="/landscape2" element={<LandscapeGallery2 />} />
            <Route path="/nature" element={<NatureGallery />} />
            <Route path="/nature2" element={<NatureGallery2 />} />
            <Route path="/pets" element={<PetsGallery />} />
            <Route path="/pets2" element={<PetsGallery2 />} />
            <Route path="/ruins" element={<RuinsGallery />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
