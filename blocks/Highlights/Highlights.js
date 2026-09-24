import React from 'react';
import styles from './Highlights.module.scss';

export default function Highlights() {
  const stats = [
    {
      value: '1,156 – 1,447 sq.ft',
      label: 'Unit Sizes',
    },
    {
      value: '2 & 3 BHK',
      label: 'Bedrooms',
    },
    {
      value: '₹75 Lakhs onwards',
      label: 'Starting Price',
    },
  ];

  return (
    <section className={styles.section}>
      <div className="wrap">
        <div className={styles.statsGrid}>
          {stats.map((item, index) => (
            <div key={index} className={`${styles.statCard} reveal reveal-delay-${index + 1}`}>
              <div className={styles.statValue}>{item.value}</div>
              <div className={styles.statLabel}>{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
