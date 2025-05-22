import React from 'react';
import './App.css';

function App() {
  return (
    //block 1
    <div>
      <div className="block1-container">
        <img src="/header.png" alt="Header" className="header-img" />
        <div className="text-container">
          <div className="blanc-text">Blanc</div>
          <div className="nailLounge-text">Nail Lounge</div>
        </div>
      </div>
      <div className="block2-container">
        <img src="/marble.png" alt="Marble" className="marble-img" />
        <img src="/nails.png" alt="Nails" className="nails-img" />
        <div className="description-text">
          <div className="text-header">set the tone for a luxurious escape</div>
          <div className="text-body">Step into a world of elegance and tranquility at our nail salon,
            where every detail is designed to pamper you. Whether you're here for a quick refresh or a full spa
            indulgence, our expert technicians ensure personalized care, top-quality products, and a flawless
            finish that leaves you feeling relaxed, rejuvenated, and beautifully polished.</div>
        </div>
      </div>
      <div className="block3-container">
        <img src="/gradient.png" alt="Gradient" className="gradient-img" />
        <div className="block3-content">
          <div className="block3-header">What We Do</div>
          <div className="services-container">
            <div className="service-item">
              <img src="/manicure.png" alt="Manicure" className="services-img" />
              <div className="service-label">manicure</div>
            </div>
            <div className="service-item">
              <img src="/pedicure.png" alt="Pedicure" className="services-img" />
              <div className="service-label">pedicure</div>
            </div>
            <div className="service-item">
              <img src="/massage.png" alt="Massage" className="services-img" />
              <div className="service-label">massage</div>
            </div>
            <div className="service-item">
              <img src="/wax.png" alt="Wax" className="services-img" />
              <div className="service-label">wax</div>
            </div>
          </div>
        </div>
      </div>
      <div className="block4-container">
        <img src="/block4.png" alt="Block4" className="block4-img" />
        <div className="block4-text-container">
          <div className="line"></div>
          <div className="block4-text">Delicately designed for your moments of stillness and care.</div>
          <div className="line"></div>
        </div>
      </div>
    </div>
  );
}

export default App
