import React from 'react';
import Media from '../Media/Media';
import styles from './Location.module.scss';

export default function Location() {
  const locations = [
    { name: 'City Centre', dist: '18 min' },
    { name: 'Airport', dist: '35 min' },
    { name: 'Business District', dist: '22 min' },
    { name: 'Schools', dist: '10 min' },
    { name: 'Hospitals', dist: '12 min' },
    { name: 'Shopping', dist: '15 min' },
    { name: 'Major Roads', dist: '5 min' },
  ];

  return (
    <section className={`${styles.section} bg-ivory`} id="location">
      <div className="wrap">
        <div className={styles.locationGrid}>
          <div className="reveal">
            <div className="eyebrow">Location</div>
            <h2>Close to everything. Away from the ordinary.</h2>
            <div className={styles.locationList}>
              {locations.map((loc, i) => (
                <div key={i} className={styles.locItem}>
                  <span className={styles.name}>{loc.name}</span>
                  <span className={styles.dist}>{loc.dist}</span>
                </div>
              ))}
            </div>
          </div>

          <Media
            src="https://picsum.photos/seed/atarashii-location/1200/900"
            alt="Location Map"
            label="Location Map / Image"
            className={`${styles.locationMedia} reveal reveal-delay-1`}
          />
        </div>
      </div>
    </section>
  );
}
