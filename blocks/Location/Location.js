import React, { useState } from 'react';
import styles from './Location.module.scss';

export default function Location() {
  const [openIndex, setOpenIndex] = useState(0);

  const categories = [
    {
      title: 'Connectivity & Key Destinations',
      items: [
        { name: 'Vattiyoorkavu Jn', dist: '2.4 km' },
        { name: 'Sasthamangalam', dist: '5.3 km' },
        { name: 'Vellayambalam', dist: '7.0 km' },
        { name: 'Kowdiar', dist: '7.5 km' },
        { name: 'Central Bus Stand', dist: '9.1 km' },
        { name: 'Central Railway Station', dist: '10.5 km' },
        { name: 'International Airport', dist: '12.6 km' },
      ],
    },
    {
      title: 'Healthcare & Hospitals',
      items: [
        { name: 'Sri Ramakrishna Mission Hospital', dist: '5.0 km' },
        { name: 'SP Well Fort Hospital', dist: '5.3 km' },
        { name: 'SK Hospital', dist: '6.0 km' },
      ],
    },
    {
      title: 'Education & Colleges',
      items: [
        { name: 'Bharatiya Vidya Bhavan', dist: '400 m' },
        { name: 'Saraswathi Vidyalaya', dist: '3.0 km' },
        { name: 'Central Polytechnic College', dist: '3.1 km' },
        { name: 'Mar Ivanios', dist: '9.9 km' },
      ],
    },
  ];

  const toggle = (idx) => {
    setOpenIndex((prev) => (prev === idx ? -1 : idx));
  };

  return (
    <section className={`${styles.section} bg-ivory`} id="location">
      <div className="wrap">
        <div className={`${styles.locationHead} reveal`}>
          <div className="eyebrow">Location</div>
          <h2>Close to everything. Away from the ordinary.</h2>
        </div>

        <div className={styles.locationGrid}>
          <div className={`${styles.categoriesList} reveal reveal-delay-1`}>
            {categories.map((cat, catIdx) => {
              const isOpen = openIndex === catIdx;
              return (
                <div
                  key={catIdx}
                  className={`${styles.categoryBlock} ${isOpen ? styles.open : ''}`}
                >
                  <button
                    type="button"
                    className={styles.catTitle}
                    onClick={() => toggle(catIdx)}
                    aria-expanded={isOpen}
                  >
                    <span className={styles.catTitleText}>{cat.title}</span>
                    <span className={styles.chevron} aria-hidden="true">
                      <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                        <path
                          d="M1 1.5L6 6.5L11 1.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </button>

                  <div className={styles.accordionPanel} data-open={isOpen}>
                    <div className={styles.accordionInner}>
                      <div className={styles.locationList}>
                        {cat.items.map((loc, i) => (
                          <div key={i} className={styles.locItem}>
                            <span className={styles.name}>{loc.name}</span>
                            <span className={styles.dist}>{loc.dist}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className={`${styles.locationMediaWrap} reveal reveal-delay-2`}>
            <img
              src="/images/location-map.jpg"
              alt="Atarashii Serenity 3D Aerial Location Map"
              className={styles.locationImg}
            />
          </div>
        </div>
      </div>
    </section>
  );
}