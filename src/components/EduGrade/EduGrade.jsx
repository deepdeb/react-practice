import React from "react";
import "./EduGrade.css";

const EduGrade = () => {
  return (
    <div className="app">
      <header className="top-bar">
        <div className="contact-info">
          <span>+0 (000) 000 00 00</span>
          <span>info@companyname.com</span>
        </div>
        <div className="auth-links">
          <a href="#">Register</a>
          <a href="#">Login</a>
        </div>
      </header>

      <nav className="navbar">
        <div className="logo">EDUGRADE</div>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Courses</a></li>
          <li><a href="#">Event</a></li>
          <li><a href="#">Pages</a></li>
          <li><a href="#">Teachers</a></li>
          <li><a href="#">Shop</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>

      <section className="hero">
        <div className="hero-text">
          <h5>WE ARE HERE TO HELP YOU</h5>
          <h1>WELCOME TO EDUREAD</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button>GET STARTED</button>
        </div>
        <div className="hero-image">
          <img src="/hero.png" alt="hero" />
        </div>
      </section>

      <section className="features">
        <h2>BEST PLATFORM TO LEARN EVERYTHING</h2>
        <div className="feature-cards">
          <div className="card">Industry Professional UX Writers</div>
          <div className="card">Try Before You Buy</div>
          <div className="card">Dedicated Account Managers</div>
        </div>
      </section>

      <section className="about-events">
        <div className="about">
          <h3>Welcome to <br /> Write My Disso</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
          <button>READ MORE</button>
        </div>
        <div className="events">
          <h3>UPCOMING EVENTS</h3>
          <ul>
            <li>
              <strong>2 December 2019</strong>
              <p>Sed ut perspiciatis unde omnis iste.<br />10:00 AM - 3:00 PM • Re Auditorium</p>
            </li>
            <li>
              <strong>2 December 2019</strong>
              <p>Lorem ipsum gravida nibh vel.<br />10:00 AM - 3:00 PM • Re Auditorium</p>
            </li>
            <li>
              <strong>2 December 2019</strong>
              <p>Morbi accumsan ipsum velit.<br />10:00 AM - 3:00 PM • Re Auditorium</p>
            </li>
          </ul>
        </div>
      </section>

      <section className="apply-section">
        <div className="apply-card">
          <h4>APPLY FOR FALL 2019</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          <button>Apply Now</button>
        </div>
        <div className="apply-card">
          <h4>APPLY FOR SCHOLARSHIP</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          <button>Apply Now</button>
        </div>
      </section>

      <footer className="footer">
        <h3>Featured Courses</h3>
        {/* Add your featured course cards here */}
      </footer>
    </div>
  );
};

export default EduGrade;