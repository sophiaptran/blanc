import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';


function About() {
  return (
    <div className="About-page">
      <img src="/aboutBackground.png" alt="Background" className="background-img" />

      {/* Menu */}
      <nav className="top-menu">
        <ul>
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53477.31002175786!2d-96.75355155136718!3d33.1003578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c17d00e902ae7%3A0xe17120905bf12cee!2sNAIL%20BOX%20SALON%20(%20BOOKING%20ONLINE%20AVAILABLE%20)!5e0!3m2!1sen!2sus!4v1748718708747!5m2!1sen!2sus"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="right-description-columns">
    <div className="store-hours">
      <h3>STORE HOURS</h3>
      <p>Mon-Fri: 9am - 7pm</p>
      <p>Sat: 10am - 6pm</p>
      <p>Sun: Closed</p>
    </div>
    <div className="contact-info">
      <h3>CONTACT INFO</h3>
      <p>Phone: (123) 456-7890</p>
      <p>Email: contact@blanc.com</p>
      <p>Address: 123 Elegance St, Suite 100</p>
    </div>
  </div>
        </div>
      </div>

    </div>

  );
}

export default About;
