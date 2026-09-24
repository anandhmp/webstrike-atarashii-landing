import React, { useState, useEffect } from 'react';
import styles from './Header.module.scss';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDrawer = () => {
    setDrawerOpen((prev) => !prev);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      <header className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`} id="siteNav">
        <div className={`wrap ${styles.navInner}`}>
          <a href="#top" className={styles.logo}>
            <span className={styles.mark}>Atarashii</span>
            <span className={styles.sub}>Serenity</span>
          </a>
          <ul className={styles.navLinks}>
            <li><a href="#overview">Overview</a></li>
            <li><a href="#residences">The Residences</a></li>
            <li><a href="#architecture">Architecture</a></li>
            <li><a href="#amenities">Amenities</a></li>
            <li><a href="#location">Location</a></li>
          </ul>
          <div className={styles.navCta}>
            <a href="#visit" className="btn btn-ghost-light">Book a Private Visit</a>
            <button
              className={styles.navBurger}
              id="burgerBtn"
              aria-label="Open menu"
              onClick={toggleDrawer}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      <div className={`${styles.mobileDrawer} ${drawerOpen ? styles.open : ''}`} id="mobileDrawer">
        <a href="#overview" onClick={closeDrawer}>Overview</a>
        <a href="#residences" onClick={closeDrawer}>The Residences</a>
        <a href="#architecture" onClick={closeDrawer}>Architecture</a>
        <a href="#amenities" onClick={closeDrawer}>Amenities</a>
        <a href="#location" onClick={closeDrawer}>Location</a>
        <a href="#visit" className="btn btn-ghost-light" onClick={closeDrawer}>Book a Private Visit</a>
      </div>
    </>
  );
}
