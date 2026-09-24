import React from 'react';
import Media from '../Media/Media';
import styles from './Landscape.module.scss';

export default function Landscape() {
  return (
    <section className={styles.landscape}>
      <Media
        src="https://picsum.photos/seed/atarashii-landscape2/1920/1200"
        alt="Landscape Background"
        label="Landscape Image / Cinematic Video"
      />
      <div className={styles.landscapeContent}>
        <h2 className="reveal">A home surrounded by stillness.</h2>
        <p className="reveal reveal-delay-1">
          Landscaped spaces, natural textures, quiet corners, and carefully considered outdoor experiences shape every walk through Serenity.
        </p>
      </div>
    </section>
  );
}
