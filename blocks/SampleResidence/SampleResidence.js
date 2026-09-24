import React from 'react';
import Media from '../Media/Media';
import styles from './SampleResidence.module.scss';

export default function SampleResidence() {
  const features = [
    {
      title: 'Warm, natural palettes',
      desc: 'Earthy textures and soft tones that feel timeless.',
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      ),
    },
    {
      title: 'Smart, liveable layouts',
      desc: 'Well-zoned spaces that balance comfort and functionality.',
      icon: (
        <svg viewBox="0 0 24 24">
          <rect x="3" y="3" width="18" height="18" rx="1" />
          <path d="M3 10h18M10 10v11" />
        </svg>
      ),
    },
    {
      title: 'Refined craftsmanship',
      desc: 'Thoughtful detailing in every corner, built to last.',
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
    },
    {
      title: 'Real and ready',
      desc: 'Experience the quality and calm of your future home today.',
      icon: (
        <svg viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="8" />
          <path d="M12 8v8M8 12h8" />
        </svg>
      ),
    },
  ];

  return (
    <section className={styles.section} id="sample-residence">
      <div className="wrap">
        <div className={styles.grid}>
          {/* Left Column Text & Feature List */}
          <div className={`${styles.leftCol} reveal`}>
            <div className={styles.titleBox}>
              <h2>The<br />Sample Residence</h2>
              <div className={styles.goldLine} />
              <div className={styles.subTitle}>A home you can walk through today.</div>
              <p className={styles.introDesc}>
                Step inside calm, light-filled spaces finished with warm materials, crafted details and practical planning — a true reflection of the Atarashii Serenity promise.
              </p>
            </div>

            <div className={styles.featuresList}>
              {features.map((item, index) => (
                <div key={index} className={styles.featureItem}>
                  <div className={styles.iconWrap}>{item.icon}</div>
                  <div className={styles.featureText}>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`${styles.rightCol} reveal reveal-delay-1`}>
            <Media
              src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80"
              alt="Sample Residence Courtyard Pond"
              label="Indoor Water Courtyard Image"
            />
            <Media
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80"
              alt="Sample Residence Dining Space"
              label="Sample Flat Dining Room Image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
