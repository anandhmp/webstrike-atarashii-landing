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
            <h2>A More Comfortable, Connected and Complete Way of Living</h2>
          </div>
          <div className={`${styles.introCopy} reveal reveal-delay-1`}>
            <p>Serenity is more than a residence. It is a carefully considered way of living. From the architecture and materials to the spaces created for wellness, leisure and everyday moments, every detail has been thoughtfully planned to bring greater comfort and calm to life.</p>

            <p>Here, luxury is not about excess. It is about living well, in a space that feels truly yours. </p>

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
