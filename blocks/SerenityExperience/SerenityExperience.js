import React from 'react';
import styles from './SerenityExperience.module.scss';

export default function SerenityExperience() {
  const col1 = [
    'Rooftop Swimming Pool with Shower',
    'Rooftop Garden',
    'Home Theatre',
    'Indoor Games',
    'Fitness Centre',
    "Residents' Lounge",
    'Recreation Space',
    'Indoor Waterfall with Zen Garden',
    'Roof Top Party Area',
    'Roof Top Barbeque',
    'Garden With Grill Facilities',
  ];

  const col2 = [
    'Sky Gazing Platform with Power Telescope',
    'EV Charging Station',
    'Mini Golf Area',
    'Yoga Meditation Deck',
    'Open To Sky Central Atrium',
    'Biometric Access',
    'Wifi, Intercom',
    'Designer Lobby Office Space',
    'Pet Play Area',
    'Waste Disposal Unit',
    'Campfire Area',
  ];

  return (
    <section className={styles.section} id="serenity-experience">
      <div className="wrap">
        <div className={`${styles.titleBox} reveal`}>
          <h2>The Serenity<br />Experience</h2>
          <div className={styles.goldLine} />
        </div>

        <div className={styles.experienceGrid}>
          <div className={`${styles.experienceCol} reveal reveal-delay-1`}>
            {col1.map((item, index) => (
              <div key={index} className={styles.experienceItem}>
                {item}
              </div>
            ))}
          </div>

          <div className={`${styles.experienceCol} reveal reveal-delay-2`}>
            {col2.map((item, index) => (
              <div key={index} className={styles.experienceItem}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
