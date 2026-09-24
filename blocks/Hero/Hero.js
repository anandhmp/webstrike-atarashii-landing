import React, { useEffect, useRef } from 'react';
import Media from '../Media/Media';
import styles from './Hero.module.scss';

export default function Hero() {
  const mediaRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const handleScroll = () => {
      if (mediaRef.current) {
        const y = Math.min(window.scrollY, 700);
        mediaRef.current.style.transform = `translateY(${y * 0.18}px) scale(1.06)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className={styles.hero} id="top">
      <div ref={mediaRef} style={{ position: 'absolute', inset: 0, zIndex: -1 }}>
        <Media
          src="https://picsum.photos/seed/atarashii-hero/1920/1080"
          alt="Hero"
          label="Hero Video / Image"
          className={styles.heroMedia}
        />
      </div>

      <div className={styles.heroContent}>
        <div className={styles.heroEyebrow}>Atarashii Serenity</div>
        <h1 className={styles.heroTitle}>A More Refined Way to Live  </h1>
        <div className={styles.heroSub}>Nearing Completion</div>
        <p className={styles.heroCopy}>
          2 & 3 BHK Ultra-Luxury Apartments in Vattiyoorkavu, Trivandrum
          Starting from ₹75 Lakhs
        </p>
        <div className={styles.heroActions}>
          <a href="#overview" className="btn btn-gold">Explore Serenity</a>
          <a href="#visit" className="btn btn-ghost-light">Book a Private Visit</a>
        </div>
      </div>

      <div className={styles.scrollCue}>
        <span>Scroll</span>
        <div className={styles.line}></div>
      </div>
    </section>
  );
}
