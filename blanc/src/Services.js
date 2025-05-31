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
          <li><a href="#gallery">Gallery</a></li>
        </ul>
      </nav>

      <div className="titleContainer">
        <p className="logo">Blanc</p>
        <p className="subLogo">Nail Lounge</p>
        <h2 className="pageTitle">Price Menu</h2>
      </div>

      <div className="rectangle-container">
        <p className="rectangle-title">MANICURE</p>
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

    </div>
  );
}

export default Services;
