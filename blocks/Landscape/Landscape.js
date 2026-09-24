import React from 'react';
import styles from './Landscape.module.scss';

export default function Landscape() {
  return (
    <section className={styles.landscape}>
      <img
        src="/images/landscape-bg.jpg"
        alt="Atarashii Serenity Landscape Balcony View"
        className={styles.landscapeImg}
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
