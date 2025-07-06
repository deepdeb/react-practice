import React, { useEffect, useState } from 'react';
import './QClayLanding.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo"></div>
      <nav className="nav">
        <a href="#">Home</a>
        <a href="#">DeFi App</a>
        <a href="#">Assets</a>
        <a href="#">Features</a>
        <a href="#">Pricing</a>
        <a href="#">FAQ</a>
        <div className="protection">Protection</div>
      </nav>
      <div className="account-section">
        <span className="icon user-icon"></span>
        <a href="#" className="create-account">Create Account</a>
      </div>
    </header>
  );
};

const Hero = () => {
  return (
    <section className="hero">
      <div className="map-text">Cortex <span>20.945</span></div>
      <div className="map-text">Quant <span>2.945</span></div>
      <div className="map-text">Aelf <span>19.346</span></div>
      <div className="map-text">Meeton <span>440</span></div>
      
      <button className="unlock-button">Unlock Your Assets Spark! →</button>
      
      <h1 className="hero-heading">
        One-click for <span className="highlight">Asset Defense</span>
      </h1>
      
      <p className="hero-subtext">
        Dive into the art assets, where innovative blockchain technology meets financial expertise
      </p>
      
      <div className="hero-buttons">
        <button className="open-app">Open App</button>
        <button className="discover">Discover More</button>
      </div>
      
      <div className="scroll-indicator">02/03 . Scroll down</div>
    </section>
  );
};

const FooterLogos = () => (
  <div className="footer-logos">
    <span>▲Vercel</span>
    <span>loom</span>
    <span>$Cash App</span>
    <span>◎Loops</span>
    <span>→zapier</span>
    <span>ramp↗</span>
    <span>⟡Raycast</span>
  </div>
);

const QClayLanding = () => {
  return (
    <div className="app">
      <Header />
      <Hero />
      <FooterLogos />
    </div>
  );
};

export default QClayLanding;