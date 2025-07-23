import React, { useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';


function About() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="About-page">
      <img src="/aboutBackground.png" alt="Background" className="background-img" />

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

      <div className="about-main-section">
        <div className="about-left">
          <div className="aboutTitleContainer">
            <p className="logo">Blanc</p>
            <p className="aboutSubLogo">Nail Lounge</p>
            <p className="about-description">Enter a haven of elegance and serenity, where every detail is thoughtfully crafted to indulge you. Whether you're seeking a quick refresh or a luxurious spa experience, our skilled technicians provide personalized care, premium products, and a flawless finish—leaving you feeling refreshed, renewed, and effortlessly polished.</p>
          </div>
        </div>

        <div className="about-map-section">
          <iframe
            title="Blanc Location"
            className="map-iframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3337.8119466435564!2d-96.90690092426918!3d33.219025973482175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c383eace16c91%3A0x18ae8f03b3dcbbac!2s27052%20E%20University%20Dr%20%23115%2C%20Little%20Elm%2C%20TX%2075068!5e0!3m2!1sen!2sus!4v1752780179634!5m2!1sen!2sus"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="right-description-columns">
            <div className="store-hours">
              <h3>STORE HOURS</h3>
              <p>Mon - Fri: 10:00am - 7:30pm</p>
              <p>Sat: 9:30am - 7:00pm</p>
              <p>Sun: 11:00am - 5:00pm</p>
            </div>
            <div className="contact-info">
              <h3>CONTACT INFO</h3>

              <p className="info-line">
                <img src="/phone.png" alt="phone" className="about-icon" />
                <span>(123) 456-7890</span>
              </p>
              <p className="info-line">
                <img src="/email.png" alt="email" className="about-icon" />
                <span>blanccndllc@gmail</span>
              </p>
              <p className="info-line">
                <img src="/pin.png" alt="pin" className="about-icon" />
                <span>27052 E UNIVERSITY DR STE 115
                  LITTLE ELM, TX 75068</span>
              </p>
            </div>
          </div>
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

export default About;
