import React, { useEffect, useState } from 'react';
import styles from './QClayLanding.module.css';

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
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}></div>
      <nav className={styles.nav}>
        <a href="#">Home</a>
        <a href="#">DeFi App</a>
        <a href="#">Assets</a>
        <a href="#">Features</a>
        <a href="#">Pricing</a>
        <a href="#">FAQ</a>
        <div className={styles.protection}>Protection</div>
      </nav>
      <div className={styles.accountSection}>
        <span className={styles.userIcon}></span>
        <a href="#" className={styles.createAccount}>Create Account</a>
      </div>
    </header>
  );
};

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.mapText}>Cortex <span>20.945</span></div>
      <div className={styles.mapText}>Quant <span>2.945</span></div>
      <div className={styles.mapText}>Aelf <span>19.346</span></div>
      <div className={styles.mapText}>Meeton <span>440</span></div>
      
      <button className={styles.unlockButton}>Unlock Your Assets Spark! →</button>
      
      <h1 className={styles.heroHeading}>
        One-click for <span className={styles.highlight}>Asset Defense</span>
      </h1>
      
      <p className={styles.heroSubtext}>
        Dive into the art assets, where innovative blockchain technology meets financial expertise
      </p>
      
      <div className={styles.heroButtons}>
        <button className={styles.openApp}>Open App</button>
        <button className={styles.discover}>Discover More</button>
      </div>
      
      <div className={styles.scrollIndicator}>02/03 . Scroll down</div>
    </section>
  );
};

const FooterLogos = () => (
  <div className={styles.footerLogos}>
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
    <div className={styles.app}>
      <Header />
      <Hero />
      <FooterLogos />
    </div>
  );
};

export default QClayLanding;