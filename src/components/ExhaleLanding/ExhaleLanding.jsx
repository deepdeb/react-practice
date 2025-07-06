import React from 'react';
import profile1 from "../../assets/images/profile images/image1.jpg";
import profile2 from "../../assets/images/profile images/image2.jpg";
import profile3 from "../../assets/images/profile images/image3.jpg";
import profile4 from "../../assets/images/profile images/image4.jpg";
import profile5 from "../../assets/images/profile images/image5.jpg";
import profile6 from "../../assets/images/profile images/image6.jpg";
import profile7 from "../../assets/images/profile images/image7.jpg";
import yoga2 from "../../assets/images/yoga2.jpg";
import './ExhaleLanding.css';

const ExhaleLanding = () => {
  return (
    <div className="exhale-landing-container">
      <header className="exhale-navbar">
        <h2 className="exhale-logo">Exhale</h2>
        <nav>
          <a href="#">Home</a>
          <a href="#">Classes</a>
          <a href="#">Pricing</a>
          <a href="#">Contact</a>
        </nav>
        <button className="exhale-sign-in">Sign In</button>
      </header>

      <section className="exhale-hero-section">
        <div className="exhale-hero-text">
          <h1>Discover Yourself<br />Discover Yoga</h1>
          <p>We share the transformative power of yoga with every mind, every body, everywhere</p>
          <button className="exhale-join-btn">Join Now</button>

          <div className="exhale-members-info">
            <div className="exhale-profile-group">
              {[profile1, profile2, profile3, profile4, profile5].map((img, i) => (
                <img key={i} src={img} alt={`user-${i}`} className="exhale-profile-pic" />
              ))}
            </div>
            <p className="exhale-member-count">9.5k+<br /><span>More than 9.5k members are connected with us</span></p>
            <a href="#" className="exhale-register-link">Register Now</a>
          </div>
        </div>

        <div className="exhale-hero-image">
          <img src={yoga2} alt="yoga" className="exhale-yoga-img" />
          <div className="exhale-mind-progression">80%<br /><span>Mind Progression</span></div>
        </div>

        <div className="exhale-stats">
          <div><strong>30+</strong><br />Live Session</div>
          <div><strong>12k+</strong><br />Lives Impact</div>
          <div><strong>60%</strong><br />Engagement Rate</div>
          <div><strong>95%</strong><br />User Satisfaction</div>
        </div>
      </section>

      <section className="exhale-testimonials">
        <div className="exhale-testimonial">
          <p>“First I’ve paid for online yoga program. I can feel my whole approach to life changing by utilising all of the program content”</p>
          <div className="exhale-user-info">
            <img src={profile6} alt="Bessie Cooper" className="exhale-testimonial-pic" />
            <div>
              <strong>Bessie Cooper</strong><br />
              <span>California</span>
            </div>
          </div>
        </div>
        <div className="exhale-testimonial">
          <p>“Absolutely love it so far! The next stage for yoga. The themes are meaningful not silly. Instructors are so helpful!”</p>
          <div className="exhale-user-info">
            <img src={profile7} alt="Anna Smith" className="exhale-testimonial-pic" />
            <div>
              <strong>Anna Smith</strong><br />
              <span>New York</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExhaleLanding;