import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Services() {
  return (
    <div className="services-page">
      <img src="background.png" alt="Background" className="background-img" />
      {/* Menu */}
        <nav className="top-menu">
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><a href="#about">About</a></li>
            <li><Link to="/services">Services</Link></li>
            <li><a href="#gallery">Gallery</a></li>
          </ul>
        </nav>
        
      <div className="services-content">
          <div className="blanc-text">Blanc</div>
          <div className="nailLounge-text">Nail Lounge</div>
                <div className="text-container">
                  
          </div>

      </div>
    </div>
  );
}

export default Services;
