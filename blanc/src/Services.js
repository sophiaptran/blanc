import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Services() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="services-page">
      <img src="/background.png" alt="Background" className="background-img" />



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
          Premium individual packets, fingers soak in infused red wine and herbal, neck warm, cuticle care, callus treatment, sugar scrub exfoliation with fresh orange, moisture mask with hot towel, hydrated paraffin, hot stone, collagen gloves, 4 mins neck/shoulder massage, 8 mins hand massage, free gel or regular polish of your choice
        </p>

        <div className="price-item">
          <span className="service-name">Deluxe Manicure</span>
          <span className="service-price">$40</span>
        </div>
        <p className="service-description">
          Premium Individual Packets, fingers soak, cuticle care, moisture mask with hot towel, hydrated paraffin, 8 mins hands massage, free regular polish of your choice
        </p>

        <div className="price-item">
          <span className="service-name">Express Manicure</span>
          <span className="service-price">$25</span>
        </div>
        <p className="service-description">
          Fingers soak, cuticle care, 4 mins hands massage, free regular polish of your choice
        </p>
      </div>

      <div className="rectangle-container">
        <p className="rectangle-title">PEDICURE</p>
        <p className="service-description">Add Color Gel $20 Extra</p>
        <p className="service-description">Add French Gel $28 Extra</p>
        <p className="service-description">Extra $5 charge for removing gel to put on regular polish</p>
        <div className="price-item">
          <span className="service-name">Blanc Herbal with CBD Pedicure</span>
          <span className="service-price">$99</span>
        </div>
        <p className="service-description">
          Premium individual packets, feet soak in infused red wine and herbal, neck warm, cuticle care, callus treatment, sugar scrub exfoliation with fresh orange, moisture mask with hot towel, hydrated paraffin, hot stone, collagen sock, 5 mins neck/shoulder massage, 20 mins legs & feet massage with steam machine, free gel or regular polish of your choice
        </p>
        <div className="price-item">
          <span className="service-name">Collage Jelly Pedicure</span>
          <span className="service-price">$80</span>
        </div>
        <p className="service-description">
          Luxury individual packets, jelly feet soak with fresh rose, neck warm, cuticle care, callus treatment, sugar scrub exfoliation with fresh orange, moisture mask with hot towel, hydrated paraffin, hot stone, collagen sock, 18 mins legs & feet massage, free regular polish of your choice
        </p>
        <div className="price-item">
          <span className="service-name">Seasonal Pedicure</span>
          <span className="service-price">$65</span>
        </div>
        <p className="service-description">
          Luxury individual packets, feet soak in infused season scent, bath bomb, cuticle care, callus treatment, sugar scrub exfoliation with fresh orange, moisture mask with hot towel, hydrated paraffin, hot stone, collagen sock, 15 mins legs & feet massage, free regular polish of your choice
        </p>
        <div className="price-item">
          <span className="service-name">Deluxe Pedicure</span>
          <span className="service-price">$50</span>
        </div>
        <p className="service-description">
          Green Tea&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Coffee
        </p>        <p className="service-description">
          Individual packets, feet soak with match / coffee, bath bomb, cuticle care, callus treatment, sugar scrub exfoliation, mud mask with hot towel, hydrated paraffin, hot stone, collagen sock, 10 mins legs & feet massage, free regular polish of your choice
        </p> <div className="price-item">
          <span className="service-name">Express Pedicure</span>
          <span className="service-price">$35</span>
        </div>
        <p className="service-description">
          (Callus treatment is not Included)
        </p>        <p className="service-description">
          Individual packets, cuticle care, light heels buffing, sugar scrub, 5 mins legs & feet massage, free regular polish of your choice
        </p>
      </div>

      <div className="rectangle-container">
        <p className="rectangle-title">KIDS MANICURE / PEDICURE (UNDER 10 YEARS OLD)</p>

        <div className="price-columns">
          <div className="price-item">
            <span className="service-name">Manicure</span>
            <span className="service-price">$17</span>
          </div>
          <div className="price-item">
            <span className="service-name">Pedicure</span>
            <span className="service-price">$28</span>
          </div>
          <div className="price-item">
            <span className="service-name">Manicure / Pedicure Combo</span>
            <span className="service-price">$42</span>
          </div>
          <div className="price-item">
            <span className="service-name">Add Gel Color / French With Service</span>
            <span className="service-price">$15 / $20 Extra</span>
          </div>
        </div>
      </div>



      <div className="rectangle-container">
        <p className="rectangle-title">DIPPING POWDER</p>
        <div className="price-columns">
          <div className="price-item">
            <span className="service-name">Dipping Color</span>
            <span className="service-price">$46</span>
          </div>
          <div className="price-item">
            <span className="service-name">Dipping French</span>
            <span className="service-price">$56</span>
          </div>
          <div className="price-item">
            <span className="service-name">Dipping Color Tip</span>
            <span className="service-price">$62</span>
          </div>
          <div className="price-item">
            <span className="service-name">Dipping Ombre</span>
            <span className="service-price">$65</span>
          </div>
          <div className="price-item">
            <span className="service-name">Deep French Gel</span>
            <span className="service-price">$25 Extra</span>
          </div>
          <div className="price-item">
            <span className="service-name">Extension</span>
            <span className="service-price">$5</span>
          </div>
          <div className="price-item">
            <span className="service-name">Length</span>
            <span className="service-price">$5+</span>
          </div>
          <div className="price-item">
            <span className="service-name">Shape (Round, Oval, Almond, Coffin, Ballerina, Stiletto)</span>
            <span className="service-price">$5</span>
          </div>
          <div className="price-item">
            <span className="service-name">Add Express / Deluxe Manicure</span>
            <span className="service-price">$15 / $30</span>
          </div>
        </div>
      </div>

      <div className="rectangle-container">
        <p className="rectangle-title">ACRYLIC & SOLAR</p>
        <div className="price-columns">
          <div className="price-item">
            <span className="service-name">Regular Full Set / Fill</span>
            <span className="service-price">$50 / $40</span>
          </div>
          <div className="price-item">
            <span className="service-name">Solar P&W Full Set / Fill</span>
            <span className="service-price">$65 / $60</span>
          </div>
          <div className="price-item">
            <span className="service-name">Solar Color Full Set / Fill</span>
            <span className="service-price">$60 / $55</span>
          </div>
          <div className="price-item">
            <span className="service-name">Solar Ombre Full Set / Fill</span>
            <span className="service-price">$65 / $60</span>
          </div>
          <div className="price-item">
            <span className="service-name">Add Gel Color / French Gel</span>
            <span className="service-price">$20 / $25</span>
          </div>
          <div className="price-item">
            <span className="service-name">Extension</span>
            <span className="service-price">$5</span>
          </div>
          <div className="price-item">
            <span className="service-name">Length</span>
            <span className="service-price">$5+</span>
          </div>
          <div className="price-item">
            <span className="service-name">Shape (Round, Oval, Almond, Coffin, Ballerina, Stiletto)</span>
            <span className="service-price">$5</span>
          </div>
        </div>
      </div>

      <div className="rectangle-container">
        <p className="rectangle-title">GEL X (PRESS-ON)</p>
        <div className="price-columns">
          <div className="price-item">
            <span className="service-name">Gel X with Gel Polish (Any shape)</span>
            <span className="service-price">$70+</span>
          </div>
          <div className="price-item">
            <span className="service-name">Refill</span>
            <span className="service-price">$60+</span>
          </div>
          <div className="price-item">
            <span className="service-name">Deep Curve French</span>
            <span className="service-price">$25 Extra</span>
          </div>
          <div className="price-item">
            <span className="service-name">Classic French</span>
            <span className="service-price">$15 Extra</span>
          </div>
          <div className="price-item">
            <span className="service-name">Shape (Round, Oval, Almond, Coffin, Ballerina, Stiletto)</span>
            <span className="service-price">$5</span>
          </div>
          <div className="price-item">
            <span className="service-name">Add Express / Deluxe Manicure</span>
            <span className="service-price">$15 / $30</span>
          </div>
        </div>
      </div>

      <div className="rectangle-container">
        <p className="rectangle-title">BUILDER GEL</p>
        <div className="price-columns">
          <div className="price-item">
            <span className="service-name">Color Full Set</span>
            <span className="service-price">$70</span>
          </div>
          <div className="price-item">
            <span className="service-name">Fill</span>
            <span className="service-price">$60</span>
          </div>
          <div className="price-item">
            <span className="service-name">Length</span>
            <span className="service-price">$5+</span>
          </div>
          <div className="price-item">
            <span className="service-name">Deep Curve French</span>
            <span className="service-price">$25 Extra</span>
          </div>
          <div className="price-item">
            <span className="service-name">Classic French</span>
            <span className="service-price">$15 Extra</span>
          </div>
          <div className="price-item">
            <span className="service-name">Shape (Round, Oval, Almond, Coffin, Ballerina, Stiletto)</span>
            <span className="service-price">$5</span>
          </div>
          <div className="price-item">
            <span className="service-name">Add Express / Deluxe Manicure</span>
            <span className="service-price">$15 / $30</span>
          </div>
        </div>
      </div>

      <div className="rectangle-container">
        <p className="rectangle-title">TAP GEL</p>
        <div className="price-columns">
          <div className="price-item">
            <span className="service-name">Color Full Set</span>
            <span className="service-price">$65</span>
          </div>
          <div className="price-item">
            <span className="service-name">Fill</span>
            <span className="service-price">$55</span>
          </div>
          <div className="price-item">
            <span className="service-name">Length</span>
            <span className="service-price">$5+</span>
          </div>
          <div className="price-item">
            <span className="service-name">Deep Curve French</span>
            <span className="service-price">$25 Extra</span>
          </div>
          <div className="price-item">
            <span className="service-name">Classic French</span>
            <span className="service-price">$15 Extra</span>
          </div>
          <div className="price-item">
            <span className="service-name">Shape (Round, Oval, Almond, Coffin, Ballerina, Stiletto)</span>
            <span className="service-price">$5</span>
          </div>
          <div className="price-item">
            <span className="service-name">Add Express / Deluxe Manicure</span>
            <span className="service-price">$15 / $30</span>
          </div>
        </div>
      </div>

      <div className="rectangle-container">
        <p className="rectangle-title">WAXING</p>
        <div className="price-columns">
          <div className="price-item">
            <span className="service-name">Eyebrows</span>
            <span className="service-price">$12</span>
          </div>
          <div className="price-item">
            <span className="service-name">Lip</span>
            <span className="service-price">$10</span>
          </div>
          <div className="price-item">
            <span className="service-name">Chin</span>
            <span className="service-price">$13</span>
          </div>
          <div className="price-item">
            <span className="service-name">Sideburn</span>
            <span className="service-price">$20</span>
          </div>
          <div className="price-item">
            <span className="service-name">Full Face</span>
            <span className="service-price">$45+</span>
          </div>
          <div className="price-item">
            <span className="service-name">Under Arm</span>
            <span className="service-price">$30+</span>
          </div>
          <div className="price-item">
            <span className="service-name">Full Arm</span>
            <span className="service-price">$50+</span>
          </div>
          <div className="price-item">
            <span className="service-name">Half Arm</span>
            <span className="service-price">$35+</span>
          </div>
          <div className="price-item">
            <span className="service-name">Full Leg</span>
            <span className="service-price">$65+</span>
          </div>
          <div className="price-item">
            <span className="service-name">Half Leg</span>
            <span className="service-price">$50+</span>
          </div>
          <div className="price-item">
            <span className="service-name">Full Back</span>
            <span className="service-price">$65+</span>
          </div>
          <div className="price-item">
            <span className="service-name">Bikini</span>
            <span className="service-price">$50+</span>
          </div>
          <div className="price-item">
            <span className="service-name">Brazilian</span>
            <span className="service-price">$65+</span>
          </div>
          <div className="price-item">
            <span className="service-name">Tint</span>
            <span className="service-price">$20</span>
          </div> <div className="price-item">
            <span className="service-name">Eyebrow Tint & Wax</span>
            <span className="service-price">$30</span>
          </div>
        </div>
      </div>

      <div className="rectangle-container">
        <p className="rectangle-title">ADDITIONAL SERVICE</p>
        <div className="price-columns">
          <div className="price-item">
            <span className="service-name">Add Chrome</span>
            <span className="service-price">$20</span>
          </div>
          <div className="price-item">
            <span className="service-name">Cateye</span>
            <span className="service-price">$20</span>
          </div>
          <div className="price-item">
            <span className="service-name">3 or More Colors</span>
            <span className="service-price">$5</span>
          </div>
          <div className="price-item">
            <span className="service-name">Nail Art</span>
            <span className="service-price">$8+</span>
          </div>
          <div className="price-item">
            <span className="service-name">Matte Top Finish</span>
            <span className="service-price">$5</span>
          </div>
          <div className="price-item">
            <span className="service-name">Nail Repair</span>
            <span className="service-price">$5</span>
          </div>
          <div className="price-item">
            <span className="service-name">Acrylic Toe</span>
            <span className="service-price">$8</span>
          </div>
          <div className="price-item">
            <span className="service-name">Cuticle Trim</span>
            <span className="service-price">$10</span>
          </div>
          <div className="price-item">
            <span className="service-name">Callus</span>
            <span className="service-price">$10</span>
          </div>
          <div className="price-item">
            <span className="service-name">Paraffin Treatment</span>
            <span className="service-price">$10</span>
          </div>
          <div className="price-item">
            <span className="service-name">Collagen Glove / Sock</span>
            <span className="service-price">$12</span>
          </div>
          <div className="price-item">
            <span className="service-name">Polish Change Hand / Feet</span>
            <span className="service-price">$12 / $15</span>
          </div>
          <div className="price-item">
            <span className="service-name">Gel Polish Change Color / French</span>
            <span className="service-price">$35 / $40</span>
          </div>
          <div className="price-item">
            <span className="service-name">Nail Removal Only</span>
            <span className="service-price">$15</span>
          </div> <div className="price-item">
            <span className="service-name">Acrylic / Gel X Without Service</span>
            <span className="service-price">$20</span>
          </div>
          <div className="price-item">
            <span className="service-name">Nails Removal With Service</span>
            <span className="service-price">$10</span>
          </div>
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
