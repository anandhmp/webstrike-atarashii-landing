import React from 'react';
import Media from '../Media/Media';
import styles from './Craftsmanship.module.scss';

export default function Craftsmanship() {
  const craftItems = [
    {
      title: 'Carrara Marble',
      sub: 'Natural Stone',
      src: 'https://picsum.photos/seed/atarashii-marble/900/1200',
      label: 'Marble Detail Image',
      variant: 'stone',
      delay: '',
    },
    {
      title: 'Natural Timber',
      sub: 'Joinery',
      src: 'https://picsum.photos/seed/atarashii-wood/900/1200',
      label: 'Wood Detail Image',
      variant: '',
      delay: 'reveal-delay-1',
    },
    {
      title: 'European Hardware',
      sub: 'Detail',
      src: 'https://picsum.photos/seed/atarashii-hardware/900/1200',
      label: 'Hardware Image',
      variant: 'charcoal',
      delay: 'reveal-delay-2',
    },
  ];

  return (
    <section className={`${styles.section} bg-warm`}>
      <div className="wrap">
        <div className={`${styles.craftHead} reveal`}>
          <div className="eyebrow">Craftsmanship</div>
          <h2>The luxury is in what you notice.</h2>
        </div>

        <div className={styles.craftGrid}>
          {craftItems.map((item, index) => (
            <div key={index} className={`${styles.craftItem} reveal ${item.delay}`}>
              <Media src={item.src} alt={item.title} label={item.label} variant={item.variant} />
              <div className={styles.craftItemLabel}>
                <span>{item.title}</span>
                <span>{item.sub}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
