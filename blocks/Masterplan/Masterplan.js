import React from 'react';
import Media from '../Media/Media';
import styles from './Masterplan.module.scss';

export default function Masterplan() {
  const facts = [
    { label: 'Project', value: 'Atarashii Serenity' },
    { label: 'Location', value: 'Kerala, India' },
    { label: 'Total Area', value: '18 Acres' },
    { label: 'Residences', value: '72 Homes' },
    { label: 'Landscape', value: '65% Open' },
    { label: 'Amenities', value: '8 Spaces' },
  ];

  return (
    <section className={`${styles.section} bg-dark`}>
      <div className="wrap">
        <div className={`${styles.masterplanHead} reveal`}>
          <div className="eyebrow center" style={{ justifyContent: 'center' }}>
            Masterplan
          </div>
          <h2>A community designed as a landscape.</h2>
        </div>

        <Media
          src="https://picsum.photos/seed/atarashii-masterplan/1920/1080"
          alt="Masterplan"
          label="Masterplan Image"
          className={`${styles.masterplanMedia} reveal reveal-delay-1`}
        />

        <div className={`${styles.masterplanFacts} reveal reveal-delay-2`}>
          {facts.map((fact, index) => (
            <div key={index} className={styles.fact}>
              <div className={styles.label}>{fact.label}</div>
              <div className={styles.value}>{fact.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
