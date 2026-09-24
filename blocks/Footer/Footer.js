import React from 'react';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="wrap">
        <div className={styles.footerTop}>
          <div className={styles.footerBrand}>
            <a href="#top" className={styles.logo}>
              <img src="/images/logo.png" alt="Atarashii Logo" className={styles.logoImg} />
            </a>
            <p>
              Architecture · Wellness · Luxury<br />
              Crafting exceptional residences where architecture, wellness, and luxury converge. A new paradigm in living.
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
            {/* <p>hello@atarashiii.com</p> */}
            <p>+91 94971 74444</p>
            <p>+91 94971 75555</p>
            <p>Atarashii<br />
              The House Of Powerlink Builders,<br />
              G3 Aiswariya Jawaharnagar,<br />
              Trivandrum, Kerala, India
              PO- 695003</p>
          </div>

          <div className={styles.footerCol}>
            <h5>Follow</h5>
            <a href="https://www.instagram.com/atarashii_by_powerlinkbuilders">Instagram</a>
            <a href="https://www.facebook.com/people/Atarashii/61572368290775/">Facebook</a>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <span>© 2026 Atarashii. All rights reserved.</span>
          {/* <div className={styles.legal}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms</a>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
