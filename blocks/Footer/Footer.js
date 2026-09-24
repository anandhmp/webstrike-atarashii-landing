import React from 'react';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="wrap">
        <div className={styles.footerTop}>
          <div className={styles.footerBrand}>
            <a href="#top" className={styles.logo}>
              <span className={styles.mark}>Atarashii</span>
              <span className={styles.sub}>Serenity</span>
            </a>
            <p>
              Architecture · Wellness · Luxury<br />
              A private residential collection in Kerala, crafted for a quieter way of living.
            </p>
          </div>

          <div className={styles.footerCol}>
            <h5>Navigate</h5>
            <a href="#overview">Overview</a>
            <a href="#residences">Residences</a>
            <a href="#architecture">Architecture</a>
            <a href="#amenities">Amenities</a>
            <a href="#location">Location</a>
          </div>

          <div className={styles.footerCol}>
            <h5>Contact</h5>
            <p>hello@atarashiii.com</p>
            <p>+91 00000 00000</p>
            <p>Kerala, India</p>
            <a href="#visit" className="text-link" style={{ marginTop: '6px', color: 'var(--gold)' }}>
              Book a Private Visit
            </a>
          </div>

          <div className={styles.footerCol}>
            <h5>Follow</h5>
            <a href="#">Instagram</a>
            <a href="#">Pinterest</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <span>© 2026 Atarashii. All rights reserved.</span>
          <div className={styles.legal}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
