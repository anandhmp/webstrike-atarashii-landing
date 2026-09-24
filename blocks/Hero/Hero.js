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
        <div className={styles.heroEyebrow}>Atarashii Presents</div>
        <h1 className={styles.heroTitle}>Serenity</h1>
        <div className={styles.heroSub}>A quieter way of living.</div>
        <p className={styles.heroCopy}>
          A private collection of residences shaped by architecture, nature, and an uncompromising attention to detail.
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
