import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Gallery() {
  return (
    <div
      className="Gallery-page"
      style={{
        backgroundImage: "url('/galleryBackground.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center -10px',
        backgroundRepeat: 'no-repeat',
        marginTop: 0,
        paddingTop: 0,
      }}
    >
    

      {/* Menu */}
        <nav className="top-menu">
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><a href="/about">About</a></li>
            <li><Link to="/services">Services</Link></li>
            <li><a href="/gallery">Gallery</a></li>
          </ul>
        </nav>
     
     <h1 className="gallery-title">Gallery</h1>

      <div className="gallery-grid">
        {/* These can be image placeholders for now */}
        {Array.from({ length: 9 }).map((_, i) => (
          <div className="gallery-item" key={i}></div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
