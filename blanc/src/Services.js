import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Services() {
  return (
    <div className="services-page">
       <img src="/background.png" alt="Background" className="background-img" />



      {/* Menu */}
      <nav className="top-menu">
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><a href="/about">About</a></li>
          <li><Link to="/services">Services</Link></li>
          <li><a href="/gallery">Gallery</a></li>
        </ul>
      </nav>

      <div className="titleContainer">
        <p className="logo">Blanc</p>
        <p className="subLogo">Nail Lounge</p>
        <h2 className="pageTitle">Service Menu</h2>
      </div>

      <div className="rectangle-container">
  <p className="rectangle-title">MANICURES</p>
  <p className="service-description">Add Color Gel $20 Extra</p>
  <p className="service-description">Add French Gel $28 Extra</p>
  <p className="service-description">Extra $5 charge for removing gel to put on regular polish</p>

  <div className="price-item">
    <span className="service-name">Blanc Herbal with CBD Manicure</span>
    <span className="service-price">$59</span>
  </div>
  <p className="service-description">
    - Premium Individual Packets<br />
    - Fingers soak in infused RED WINE and Herbal<br />
    - Neck Warm<br />
    - Cuticle Care<br />
    - Sugar scrub exfoliation with fresh orange<br />
    - Moisture mask with hot towel<br />
    - Hydrated paraffin, hot stone, collagen gloves<br />
    - 4 mins neck/shoulder massage<br />
    - 8 mins hands massage<br />
    - Free regular polish of your choice
  </p>

 <div className="price-item">
    <span className="service-name">Deluxe Manicure</span>
    <span className="service-price">$40</span>
  </div>
  <p className="service-description">
    - Premium Individual Packets <br />
    - Fingers soak <br />
    - Cuticle Care <br />
    - Moisture mask with hot towel <br />
    - Hydrated paraffin <br />
    - 8 mins hands massage <br />
    - Free regular polish of your choice
  </p>

  <div className="price-item">
    <span className="service-name">Hybrid Manicure</span>
    <span className="service-price">$60</span>
  </div>
</div>
    <div className="rectangle-container">
        <p className="rectangle-title">PEDICURE</p>
        <div className="price-item">
          <span className="service-name">Regular Manicure</span>
          <span className="service-price">$30</span>
        </div>
        <div className="price-item">
          <span className="service-name">Gel Manicure</span>
          <span className="service-price">$50</span>
        </div>
        <div className="price-item">
          <span className="service-name">Hybrid Manicure</span>
          <span className="service-price">$60</span>
        </div>
      </div>
 <div className="services-block5-container">
        <div className="rights">
          <p> © 2025 Blanc Nail Lounge. All rights reserved. </p>
        </div>
      </div>

    </div>
  );
}

export default Services;
