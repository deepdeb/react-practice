import React from 'react';
import yogaImg from '../../assets/images/yoga.jpg';
import './ExhaleLanding.css';

const ExhaleLanding = () => {
  return (
    <div className="exhole-container">
      {/* Navigation */}
      <nav className="exhole-nav">
        <div className="nav-left">
          <h1>Exhole</h1>
        </div>
        <div className="nav-right">
          <a href="#">Home</a>
          <a href="#">Classes</a>
          <a href="#">Pricing</a>
          <a href="#">Contact</a>
          <a href="#">Sign in</a>
        </div>
      </nav>

      <hr className="divider" />

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h2>Discover Yourself</h2>
          <h3>Discover Yoga</h3>
          <p>We share the transformative power of yoga with every mind, every body, everywhere</p>
          <button className="cta-button">Join Now</button>
        </div>
        <div className="hero-image">
          <img src={yogaImg} alt="Yoga practice" />
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats-section">
        <div className="stat-item">
          <p className="stat-value">9.5%+</p>
          <p className="stat-description">Move from 0.6x members and connected with us!</p>
          <button className="register-button">Register Now</button>
        </div>
      </div>

      {/* Info Section */}
      <div className="info-section">
        <p>This new point for online yoga program. I can hear my video approach to take charge by utilizing all of the program content!</p>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <div className="feature-item">
          <p className="feature-value">Beside Cooper</p>
          <p className="feature-label">Collision</p>
        </div>
        <div className="feature-item">
          <p className="feature-value">30+</p>
          <p className="feature-label">Live Session</p>
        </div>
        <div className="feature-item">
          <p className="feature-value">12k+</p>
          <p className="feature-label">Live's Impact</p>
        </div>
        <div className="feature-item">
          <p className="feature-value">&gt;60%</p>
          <p className="feature-label">Topographical Rate</p>
        </div>
        <div className="feature-item">
          <p className="feature-value">95%</p>
          <p className="feature-label">User Application</p>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="testimonial-section">
        <p className="testimonial-text">
          <em>Autobucket</em> took us to fill in the next stages for yoga. The theme is an meaningful not silly, instructive one on hephat!
        </p>
        <div className="testimonial-author">
          <p className="author-name">Anna Smith</p>
          <p className="author-location">New York</p>
        </div>
      </div>
    </div>
  );
};

export default ExhaleLanding;