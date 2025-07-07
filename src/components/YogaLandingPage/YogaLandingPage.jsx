import React from 'react'
import './YogaLandingPage.css'

// Original imports with same file names
import yogaLogo from '../../assets/logos/logo.jpeg'
import yogaImg2 from '../../assets/images/yoga2.jpg'
import yogaImg3 from '../../assets/images/yoga3.jpg'
import yogaImg4 from '../../assets/images/yoga4.jpg'
import profile1 from '../../assets/images/profile images/image1.jpg'
import profile2 from '../../assets/images/profile images/image2.jpg'
import profile3 from '../../assets/images/profile images/image3.jpg'
import profile4 from '../../assets/images/profile images/image4.jpg'
import profile5 from '../../assets/images/profile images/image5.jpg'
import profile6 from '../../assets/images/profile images/image6.jpg'
import profile7 from '../../assets/images/profile images/image7.jpg'
import profile8 from '../../assets/images/profile images/image8.jpg'

const YogaLandingPage = () => {
  return (
    <div className="modern-yoga-container">

      {/* Modern Header */}
      <header className="modern-yoga-header">
        <div className="modern-yoga-logo">
          <img className="modern-logo-icon" src={yogaLogo} alt="Raj Yoga Logo" />
          <span className="modern-logo-text">RAJ YOGA</span>
        </div>
        <nav className="modern-yoga-nav">
          <a href="#about" className="modern-nav-link">About Us</a>
          <a href="#reviews" className="modern-nav-link">Reviews</a>
          <a href="#trainers" className="modern-nav-link">Trainers</a>
          <a href="#classes" className="modern-nav-link">Classes</a>
          <a href="#join" className="modern-nav-button">Join Us</a>
        </nav>
        <button className="modern-mobile-menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      {/* Sleek Hero Section */}
      <section className="modern-hero-section">
        <div className="modern-hero-content">
          <span className="modern-hero-tag">Mind-Body-Soul Balance</span>
          <h1 className="modern-hero-title">
            Achieve <span>balance</span> in mind, body, and soul.
          </h1>
          <p className="modern-hero-description">
            Our holistic approach combines ancient wisdom with modern techniques to help you find your center.
          </p>
          <div className="modern-hero-buttons">
            <a href="#classes" className="modern-primary-btn">Start Today</a>
            <a href="#about" className="modern-secondary-btn">Learn More</a>
          </div>
        </div>
        <div className="modern-hero-image" style={{ backgroundImage: `url(${yogaImg2})` }}>
          <div className="modern-hero-overlay"></div>
        </div>
      </section>

      {/* Enhanced Feature Cards */}
      <section className="modern-features-section">
        <div className="modern-features-header">
          <span className="modern-features-subtitle">Our Benefits</span>
          <h2 className="modern-features-title">Transform Your Practice</h2>
        </div>

        <div className="modern-feature-cards">
          {/* Card 1 */}
          <div className="modern-feature-card">
            <div className="modern-card-image" style={{ backgroundImage: `url(${yogaImg3})` }}></div>
            <div className="modern-card-content">
              <h3>Improved Flexibility</h3>
              <p>Gently increase your range of motion with guided poses and stretches.</p>
              <a href="#" className="modern-card-link">
                View video <span>→</span>
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="modern-feature-card">
            <div className="modern-card-image" style={{ backgroundImage: `url(${yogaImg4})` }}></div>
            <div className="modern-card-content">
              <h3>Stress Reduction</h3>
              <p>Learn breathing techniques to calm your mind and reduce anxiety.</p>
              <a href="#" className="modern-card-link">
                View video <span>→</span>
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="modern-feature-card modern-feature-highlight">
            <div className="modern-card-image" style={{ backgroundImage: `url(${yogaImg2})` }}></div>
            <div className="modern-card-content">
              <h3>Join Our Community</h3>
              <p>Experience the power of group energy in our welcoming classes.</p>
              <a href="#" className="modern-card-button">
                Get started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Testimonial Section */}
      <section className="modern-testimonial-section" id="reviews">
        <div className="modern-testimonial-container">
          <div className="modern-testimonial-header">
            <span className="modern-testimonial-subtitle">Voices of Change</span>
            <h2 className="modern-testimonial-title">Student Experiences</h2>
            <p className="modern-testimonial-description">
              See how our members have transformed their lives through yoga.
            </p>
          </div>

          <div className="modern-testimonial-content">
            <div className="modern-testimonial-profiles">
              {[profile1, profile2, profile3, profile4, profile5, profile6, profile7].map((img, index) => (
                <div key={index} className="modern-testimonial-profile">
                  <img src={img} alt={`Student ${index + 1}`} />
                </div>
              ))}
            </div>

            <div className="modern-testimonial-card">
              <div className="modern-testimonial-avatar">
                <img src={profile8} alt="Emily R." />
              </div>
              <blockquote className="modern-testimonial-quote">
                "Among the yoga communities I've been in, Raj Yoga stands out. Their instructors are knowledgeable, and the classes have helped me improve my focus and flexibility."
              </blockquote>
              <div className="modern-testimonial-author">
                <strong>Emily R.</strong>
                <span>Client at Raj Yoga</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="modern-yoga-footer">
        <div className="modern-footer-content">
          <div className="modern-footer-brand">
            <img src={yogaLogo} alt="Raj Yoga" />
            <span>RAJ YOGA</span>
          </div>
          <div className="modern-footer-links">
            <div className="modern-footer-column">
              <h4>About</h4>
              <a href="#">Our Story</a>
              <a href="#">Teachers</a>
              <a href="#">Philosophy</a>
            </div>
            <div className="modern-footer-column">
              <h4>Classes</h4>
              <a href="#">Schedule</a>
              <a href="#">Pricing</a>
              <a href="#">Workshops</a>
            </div>
            <div className="modern-footer-column">
              <h4>Connect</h4>
              <a href="#">Contact</a>
              <a href="#">Instagram</a>
              <a href="#">Facebook</a>
            </div>
          </div>
        </div>
        <div className="modern-footer-bottom">
          <p>© {new Date().getFullYear()} Raj Yoga. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default YogaLandingPage;