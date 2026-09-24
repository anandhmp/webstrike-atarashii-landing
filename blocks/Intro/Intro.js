import React from 'react';
import Media from '../Media/Media';
import styles from './Intro.module.scss';

export default function Intro() {
  return (
    <section className={`${styles.section} bg-warm`} id="overview">
      <div className="wrap">
        <div className={styles.introGrid}>
          <div className="reveal">
            <div className="eyebrow">The Serenity Experience</div>
            <h2>Designed for a life that feels beautifully unhurried.</h2>
          </div>
          <div className={`${styles.introCopy} reveal reveal-delay-1`}>
            <p>
              Atarashii Serenity is a private residential environment where architecture and landscape are conceived together, not layered one atop the other. Every threshold, courtyard, and window has been considered for the quality of light and quiet it brings into daily life.
            </p>
            <p>
              Set apart from the pace of the city, Serenity offers a rare kind of privacy — spaces that feel entirely your own, surrounded by land that has been shaped with patience rather than urgency.
            </p>
          </div>
        </div>

        <div className={styles.introMediaRow}>
          <Media
            src="https://picsum.photos/seed/atarashii-ext1/1600/1000"
            alt="Exterior Architecture"
            label="Exterior Architecture Image"
            className="reveal"
          />
          <Media
            src="https://picsum.photos/seed/atarashii-detail1/1000/1300"
            alt="Detail Material"
            label="Detail / Material Image"
            variant="stone"
            className="reveal reveal-delay-2"
          />
        </div>
      </div>
    </section>
  );
}
