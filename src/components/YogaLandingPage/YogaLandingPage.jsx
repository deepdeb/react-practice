import React from 'react'
import './YogaLandingPage.css'
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
    <div className="app-container">

      {/* Header Section */}
      <header className="header">
        <div className="logo">
          <div className="logo-icon"></div> {/* Placeholder for the actual icon */}
          SERENITY YOGA
        </div>
        <nav className="nav-links">
          <a href="#" className="nav-link">About Us</a>
          <a href="#" className="nav-link">Reviews</a>
          <a href="#" className="nav-link">Trainers</a>
          <a href="#" className="nav-link">Classes</a>
          <a href="#" className="nav-button">Join Us</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <p className="hero-tag">Mind-Body-Soul Balance</p>
          <h1 className="hero-title">Achieve balance in mind, body, and soul.</h1>
          <p className="hero-description">
            Lorem ipsum dolor sit amet consectetur. Semper malesuada ut ullamcorper sed tortor curabitur.
          </p>
        </div>
        <div className="hero-image-container">
          {/* Background image handles the yoga pose and wavy text */}
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="feature-cards-section">
        {/* Card 1: Improved Flexibility */}
        <div className="feature-card">
          <img src={yogaImg3} alt="Improved Flexibility" className="feature-card-image" />
          <div className="feature-card-content">
            <h2 className="feature-card-title">Improved Flexibility</h2>
            <div className="feature-buttons">
              <a href="#" className="feature-button">View video</a>
              <div className="feature-arrow">&#8599;</div> {/* Unicode for up-right arrow */}
            </div>
          </div>
        </div>

        {/* Card 2: Stress Reduction */}
        <div className="feature-card">
          <img src={yogaImg2} alt="Stress Reduction" className="feature-card-image" />
          <div className="feature-card-content">
            <h2 className="feature-card-title">Stress Reduction</h2>
            <div className="feature-buttons">
              <a href="#" className="feature-button">View video</a>
              <div className="feature-arrow">&#8599;</div>
            </div>
          </div>
        </div>

        {/* Card 3: Join Us for a Yoga Class Today! */}
        <div className="feature-card join-us-card">
          <img src={yogaImg4} alt="Join Us" className="feature-card-image" />
          <div className="feature-card-content">
            <h2 className="feature-card-title">Join Us for a Yoga Class Today!</h2>
            <div className="feature-buttons">
              <a href="#" className="feature-button">Get started</a>
              <div className="feature-arrow">&#8599;</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial-section">
        {/* Updated background image for curved text */}
        <div className="curved-text-bg"></div>
        <div className="testimonial-header">
          <h2 className="testimonial-title">Student Testimonials</h2>
          <p className="testimonial-description">
            See how our members have reduced stress and enhanced well-being with our support and guidance.
          </p>
        </div>

        {/* Floating images */}
        <img src={profile1} alt="Student 1" className="floating-image floating-image-1" />
        <img src={profile2} alt="Student 2" className="floating-image floating-image-2" />
        <img src={profile3} alt="Student 3" className="floating-image floating-image-3" />
        <img src={profile4} alt="Student 4" className="floating-image floating-image-4" />
        <img src={profile5} alt="Student 5" className="floating-image floating-image-5" />
        <img src={profile6} alt="Student 6" className="floating-image floating-image-6" />
        <img src={profile7} alt="Student 7" className="floating-image floating-image-7" />

        {/* Main Testimonial Card */}
        <div className="testimonial-card-main">
          <img src={profile8} alt="Emily R." />
          <p className="testimonial-quote">
            "Among the yoga community I've been in, Serenity Yoga stands out. Their instructors are knowledgeable, and the classes have helped me improve my focus and improve my flexibility."
          </p>
          <p className="testimonial-author">Emily R.</p>
          <p className="testimonial-role">Client at Serenity Yoga</p>
        </div>
      </section>
    </div>
  );
}

export default YogaLandingPage