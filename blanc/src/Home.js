import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Home() {
  return (
    <div>
      <div className="block1-container">
        <img src="/block1.png" alt="Block 1" className="block1-img" />

        {/* Menu */}
        <nav className="top-menu">
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><a href="/about">About</a></li>
            <li><Link to="/services">Services</Link></li>
            <li><a href="#gallery">Gallery</a></li>
          </ul>
        </nav>

        <div className="text-container">
          <div className="blanc-text">Blanc</div>
          <div className="nailLounge-text">Nail Lounge</div>
          <Link to="/services" className="menuButton">view menu</Link>
        </div>
      </div>

      <div className="block2-container">
        <div className="block2-content">
          <h2 className="section-title">Set the Tone for a Luxurious Escape</h2>
          <p className="section-description">
            Step into a world of elegance and tranquility at our nail lounge, where every detail is designed to pamper you. Whether you're here for a quick refresh or a full spa indulgence, our expert technicians ensure personalized care that leaves you feeling relaxed, rejuvenated, and beautifully polished.
          </p>
        </div>
      </div>

      <div className="block3-container">
        <div className="services-content">
          <h2 className="section-title">SERVICES</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>MANICURE</h3>
              <p>Essential nail care and polish for beautiful, refined hands</p>
              <img src="/nail-polish.png" alt="manicure" className="service-icon" />
            </div>
            <div className="service-card">
              <h3>PEDICURE</h3>
              <p>Relaxing foot treatment with buffing and polish perfection</p>
              <img src="/pedicure.png" alt="pedicure" className="service-icon" />
            </div>
            <div className="service-card">
              <h3>MASSAGE</h3>
              <p>Soothing full-body massage to release tension and restore balance</p>
              <img src="/facial-massage.png" alt="massage" className="service-icon" />
            </div>
            <div className="service-card">
              <h3>WAX</h3>
              <p>Gentle and effective hair removal for smooth, radiant skin</p>
              <img src="/wax.png" alt="wax" className="service-icon" />
            </div>
          </div>
        </div>
      </div>

    <div className="block4-container">
        <div className="block4-content">
          <h2 className="section-title-black">Testimonials</h2>
            <p className="stars">★★★★★</p>
          <p className="section-description">
            "Very meticulous, professional and friendly! She did a BEAUTIFUL job!" </p>
           <p className="section-name">- Elle L.</p>
        </div>
      </div>

      <div className="block5-container">
        <div className="rights">
          <p> © 2025 Blanc Nail Lounge. All rights reserved. </p>
          <p><a href="https://www.flaticon.com/free-icons/nails" title="nails icons">Nails icons created by Freepik - Flaticon</a></p>
          <p><a href="https://www.flaticon.com/free-icons/pedicure" title="pedicure icons">Pedicure icons created by Freepik - Flaticon</a></p>
          <p><a href="https://www.flaticon.com/free-icons/spa-and-relax" title="spa and relax icons">Spa and relax icons created by Freepik - Flaticon</a></p>
          <p><a href="https://www.flaticon.com/free-icons/hair" title="hair icons">Hair icons created by Mayor Icons - Flaticon</a></p>
        </div>
      </div>
    </div>
  );
}

export default Home;
