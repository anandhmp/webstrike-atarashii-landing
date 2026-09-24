import React from 'react';
import styles from './VideoSection.module.scss';

export default function VideoSection() {
  return (
    <section className={styles.videoSection} id="film">
      <div className="wrap">
        <div className={`${styles.videoHeader} reveal`}>
          <div className="eyebrow center" style={{ justifyContent: 'center' }}>
            The Project Film
          </div>
          <h2>Experience Serenity</h2>
        </div>

        <div className={`${styles.iframeWrap} reveal reveal-delay-1`}>
          <iframe
            src="https://www.youtube.com/embed/3ylvxYTq9_0?si=UYWc9nk_ZFz2Qm96"
            title="Atarashii Serenity Project Film"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className={styles.videoIframe}
          />
        </div>
      </div>
    </section>
  );
}
