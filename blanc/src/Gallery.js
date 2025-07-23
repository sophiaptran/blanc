import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Gallery() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="About-page">
      <img src="/galleryBackground.jpg" alt="Background" className="background-img" />

      {/* Menu */}
      <nav className="top-menu">
        <button
          className="hamburger"
          onClick={() => {
            setMenuOpen(!menuOpen);
            console.log("Menu is now:", !menuOpen);
          }}
        >
          ☰
        </button>
        <ul className={menuOpen ? "menu-open" : "menu-closed"}>
          <li><Link to="/home">Home</Link></li>
          <li><a href="/about">About</a></li>
          <li><Link to="/services">Services</Link></li>
          <li><a href="/gallery">Gallery</a></li>
        </ul>
      </nav>

      <div className="main-content">
        <h1 className="gallery-title">Gallery</h1>

        <div className="gallery-grid">
          {/* These can be image placeholders for now */}
          {Array.from({ length: 9 }).map((_, i) => (
            <div className="gallery-item" key={i}></div>
          ))}
        </div>
      </div>
      <div className="block5-container">
        <div className="rights">
          <p> © 2025 Blanc Nail Lounge. All rights reserved. </p>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
