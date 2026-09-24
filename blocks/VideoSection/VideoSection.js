import React, { useState, useRef } from 'react';
import Media from '../Media/Media';
import styles from './VideoSection.module.scss';

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className={styles.videoSection}>
      <Media
        src="https://picsum.photos/seed/atarashii-film/1920/1080"
        alt="Project Film Background"
        label="Project Film / Cinematic Video"
      />
      <video
        ref={videoRef}
        className={styles.videoElement}
        muted
        loop
        playsInline
        preload="none"
        poster="https://picsum.photos/seed/atarashii-film/1920/1080"
        style={{ display: isPlaying ? 'block' : 'none' }}
      >
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
        />
      </video>
      <div className={styles.videoContent}>
        <h2>Experience Serenity.</h2>
        <div
          className={styles.playBtn}
          role="button"
          aria-label={isPlaying ? 'Pause film' : 'Play film'}
          onClick={togglePlay}
        >
          {isPlaying ? (
            <svg viewBox="0 0 24 24">
              <rect x="6" y="5" width="4" height="14" fill="#FAF9F5" />
              <rect x="14" y="5" width="4" height="14" fill="#FAF9F5" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </div>
      </div>
    </section>
  );
}
