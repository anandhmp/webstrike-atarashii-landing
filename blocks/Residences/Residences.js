import React, { useState, useRef } from 'react';
import Media from '../Media/Media';
import styles from './Residences.module.scss';

export default function Residences() {
  const [progress, setProgress] = useState(24);
  const scrollRef = useRef(null);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const el = scrollRef.current;
    const max = el.scrollWidth - el.clientWidth;
    const pct = max > 0 ? (el.scrollLeft / max) * 76 + 24 : 24;
    setProgress(pct);
  };

  const residences = [
    {
      tag: 'Residence 01',
      title: 'The Garden Residence',
      meta: '3 & 4 Bedroom · Approx. 3,200 – 4,100 sq.ft',
      desc: 'Private landscaped spaces, expansive living areas, and generous natural light throughout.',
      src: 'https://picsum.photos/seed/atarashii-res1/1000/750',
      label: 'Exterior Architecture Image',
    },
    {
      tag: 'Residence 02',
      title: 'The Courtyard Residence',
      meta: '4 Bedroom · Approx. 4,600 sq.ft',
      desc: 'A private internal courtyard brings light and air into the heart of the home.',
      src: 'https://picsum.photos/seed/atarashii-res2/1000/750',
      label: 'Interior Image',
    },
    {
      tag: 'Residence 03',
      title: 'The Terrace Residence',
      meta: '3 Bedroom · Approx. 2,850 sq.ft',
      desc: 'Elevated terraces frame the surrounding landscape from every principal room.',
      src: 'https://picsum.photos/seed/atarashii-res3/1000/750',
      label: 'Exterior Architecture Image',
    },
    {
      tag: 'Residence 04',
      title: 'The Estate Residence',
      meta: '5 Bedroom · Approx. 6,200 sq.ft',
      desc: 'The largest of the collection, set within its own private landscaped grounds.',
      src: 'https://picsum.photos/seed/atarashii-res4/1000/750',
      label: 'Interior Image',
    },
  ];

  return (
    <section className={`${styles.section} bg-warm`} id="residences">
      <div className="wrap">
        <div className={`${styles.resHead} reveal`}>
          <div>
            <div className="eyebrow">The Residences</div>
            <h2>Private residences, thoughtfully composed.</h2>
          </div>
          <p className={styles.resSub}>
            A limited number of residence types, each composed around light, orientation, and privacy.
          </p>
        </div>

        <div
          className={`${styles.resScroll} reveal reveal-delay-1`}
          ref={scrollRef}
          onScroll={handleScroll}
        >
          {residences.map((res, i) => (
            <div key={i} className={styles.resCard}>
              <Media src={res.src} alt={res.title} label={res.label} />
              <div className={styles.resCardBody}>
                <div className={styles.resCardTop}>
                  <div className={styles.resTag}>{res.tag}</div>
                </div>
                <h3 className={styles.resCardTitle}>{res.title}</h3>
                <div className={styles.resMeta}>{res.meta}</div>
                <p className={styles.resDesc}>{res.desc}</p>
                <a href="#visit" className={`text-link ${styles.resLink}`}>
                  View Residence
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.resProgress}>
          <div className={styles.resProgressBar} style={{ width: `${progress}%` }} />
        </div>
      </div>
    </section>
  );
}
