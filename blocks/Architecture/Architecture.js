import React from 'react';
import Media from '../Media/Media';
import styles from './Architecture.module.scss';

export default function Architecture() {
  return (
    <section className={`${styles.section} bg-warm`} id="architecture">
      <div className="wrap">
        <div className={`${styles.architectureBlock} ${styles.storyRow}`}>
          <div className={`${styles.storyText} reveal`}>
            <div className="eyebrow">01 / Architecture</div>
            <h2>Architecture that belongs to its surroundings.</h2>
            <p>
              Every residence at Serenity is composed around light, ventilation, and proportion — never imposed on the land, but drawn out from it. Deep overhangs, cross ventilation, and considered material palettes allow the architecture to feel inevitable rather than added.
            </p>
            <div className={styles.storyList}>
              <div>
                <span>Natural Light</span>
                <span>North–South Orientation</span>
              </div>
              <div>
                <span>Ventilation</span>
                <span>Cross-Flow Design</span>
              </div>
              <div>
                <span>Privacy</span>
                <span>Layered Screening</span>
              </div>
            </div>
          </div>

          <Media
            src="https://picsum.photos/seed/atarashii-arch1/1200/1500"
            alt="Exterior Architecture"
            label="Exterior Architecture Image"
            className={`${styles.storyMedia} reveal reveal-delay-1`}
          />
        </div>

        <div className={`${styles.architectureBlock} ${styles.storyRow} ${styles.reverse}`}>
          <div className={`${styles.storyText} reveal`}>
            <div className="eyebrow">02 / Indoor–Outdoor Living</div>
            <h2>Rooms that step gently into the landscape.</h2>
            <p>
              Living spaces open onto private courtyards and gardens, dissolving the line between interior and exterior. Materiality carries through — stone, timber, and warm plaster move from indoors to out without interruption, so the landscape feels like an extension of home.
            </p>
          </div>

          <Media
            src="https://picsum.photos/seed/atarashii-arch2/1500/1100"
            alt="Interior Outdoor Living"
            label="Interior Image"
            className={`${styles.storyMedia} ${styles.wide} reveal reveal-delay-1`}
          />
        </div>
      </div>
    </section>
  );
}
