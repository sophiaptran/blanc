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
        <img src="/services.png" alt="Services" className="services-img" />
      </div>
   </div>
  );
}

export default App
