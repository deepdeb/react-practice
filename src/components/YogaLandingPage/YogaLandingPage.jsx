import React from 'react'
import './YogaLandingPage.css'

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
    <div className="rajyog-app-container">

      {/* Header Section */}
      <header className="rajyog-header">
        <div className="rajyog-logo">
            <img className="rajyog-logo-icon" src={yogaLogo} alt="" />
          RAJ YOGA
        </div>
        <nav className="rajyog-nav-links">
          <a href="#" className="rajyog-nav-link">About Us</a>
          <a href="#" className="rajyog-nav-link">Reviews</a>
          <a href="#" className="rajyog-nav-link">Trainers</a>
          <a href="#" className="rajyog-nav-link">Classes</a>
          <a href="#" className="rajyog-nav-button">Join Us</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="rajyog-hero-section">
        <div className="rajyog-hero-content">
          <p className="rajyog-hero-tag">Mind-Body-Soul Balance</p>
          <h1 className="rajyog-hero-title">Achieve balance in mind, body, and soul.</h1>
          <p className="rajyog-hero-description">
            Lorem ipsum dolor sit amet consectetur. Semper malesuada ut ullamcorper sed tortor curabitur.
          </p>
        </div>
        <div className="rajyog-hero-image-container">
          {/* Background image handles the yoga pose and wavy text */}
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="rajyog-feature-cards-section">
        {/* Card 1: Improved Flexibility */}
        <div className="rajyog-feature-card">
          <img src={yogaImg3} alt="Improved Flexibility" className="rajyog-feature-card-image" />
          <div className="rajyog-feature-card-content">
            <h2 className="rajyog-feature-card-title">Improved Flexibility</h2>
            <div className="rajyog-feature-buttons">
              <a href="#" className="rajyog-feature-button">View video</a>
              <div className="rajyog-feature-arrow">&#8599;</div> {/* Unicode for up-right arrow */}
            </div>
          </div>
        </div>

        {/* Card 2: Stress Reduction */}
        <div className="rajyog-feature-card">
          <img src={yogaImg2} alt="Stress Reduction" className="rajyog-feature-card-image" />
          <div className="rajyog-feature-card-content">
            <h2 className="rajyog-feature-card-title">Stress Reduction</h2>
            <div className="rajyog-feature-buttons">
              <a href="#" className="rajyog-feature-button">View video</a>
              <div className="rajyog-feature-arrow">&#8599;</div>
            </div>
          </div>
        </div>

        {/* Card 3: Join Us for a Yoga Class Today! */}
        <div className="rajyog-feature-card rajyog-join-us-card">
          <img src={yogaImg4} alt="Join Us" className="rajyog-feature-card-image" />
          <div className="rajyog-feature-card-content">
            <h2 className="rajyog-feature-card-title">Join Us for a Yoga Class Today!</h2>
            <div className="rajyog-feature-buttons">
              <a href="#" className="rajyog-feature-button">Get started</a>
              <div className="rajyog-feature-arrow">&#8599;</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="rajyog-testimonial-section">
        {/* Updated background image for curved text */}
        <div className="rajyog-curved-text-bg"></div>
        <div className="rajyog-testimonial-header">
          <h2 className="rajyog-testimonial-title">Student Testimonials</h2>
          <p className="rajyog-testimonial-description">
            See how our members have reduced stress and enhanced well-being with our support and guidance.
          </p>
        </div>

        {/* Floating images */}
        <img src={profile1} alt="Student 1" className="rajyog-floating-image rajyog-floating-image-1" />
        <img src={profile2} alt="Student 2" className="rajyog-floating-image rajyog-floating-image-2" />
        <img src={profile3} alt="Student 3" className="rajyog-floating-image rajyog-floating-image-3" />
        <img src={profile4} alt="Student 4" className="rajyog-floating-image rajyog-floating-image-4" />
        <img src={profile5} alt="Student 5" className="rajyog-floating-image rajyog-floating-image-5" />
        <img src={profile6} alt="Student 6" className="rajyog-floating-image rajyog-floating-image-6" />
        <img src={profile7} alt="Student 7" className="rajyog-floating-image rajyog-floating-image-7" />

        {/* Main Testimonial Card */}
        <div className="rajyog-testimonial-card-main">
          <img src={profile8} alt="Emily R." />
          <p className="rajyog-testimonial-quote">
            "Among the yoga community I've been in, Raj Yoga stands out. Their instructors are knowledgeable, and the classes have helped me improve my focus and improve my flexibility."
          </p>
          <p className="rajyog-testimonial-author">Emily R.</p>
          <p className="rajyog-testimonial-role">Client at Raj Yoga</p>
        </div>
      </section>
    </div>
  );
}

export default YogaLandingPage
