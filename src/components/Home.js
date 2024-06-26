import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseCrack, faPaw, faSeedling, faMountainSun, faFaceSmileBeam } from "@fortawesome/free-solid-svg-icons";
import './home.scss';

const Home = () => (
  <div className="home">
    <h1 className='homepage-header'>Portfolio Curation Galleries</h1>
    <h3 className='homepage-description'>Each of the tiles below will bring you to a gallery of photography by genre. Within each gallery, each image contains a "Like" button. Please click the "Like" button for any images that are portfolio worthy. These images' captions and IDs will be added to a flyout container fixed about midway down the page on the right. When you are finished reviewing and liking images, please click the "liked" flyout to see the caption/ID list. If it looks correct, please click "send" to send the filenames to my email. <br /> <br /> Thank you for assisting me with my portfolio curation! <FontAwesomeIcon icon={faFaceSmileBeam} /></h3>
    <div className='tileContainer'>
      <div className='tile'><NavLink to="/landscape" className="tile-link">Landscape <FontAwesomeIcon icon={faMountainSun} /></NavLink></div>
      <div className='tile'><NavLink to="/nature" className="tile-link">Nature <FontAwesomeIcon icon={faSeedling} /></NavLink></div>
      <div className='tile'><NavLink to="/pets" className="tile-link">Pets <FontAwesomeIcon icon={faPaw} /></NavLink></div>
      <div className='tile'><NavLink to="/ruins" className="tile-link">Ruins <FontAwesomeIcon icon={faHouseCrack} /></NavLink></div>
      </div>
  </div>
);

export default Home;
