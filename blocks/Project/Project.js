import React from 'react';
import styles from './Project.module.scss';

export default function Project() {
  const points = [
    { num: '01', title: 'Architecture', desc: 'Timeless design shaped through balance, proportion, and purpose.' },
    { num: '02', title: 'Wellness', desc: 'Spaces inspired by light, nature, and a more mindful way of living.' },
    { num: '03', title: 'Craftsmanship', desc: 'Refined materials and meticulous detailing brought together with precision.' },
  ];

  return (
    <section className={`${styles.section} bg-ivory`}>
      <div className="wrap">
        <div className={`${styles.projectHead} reveal`}>
          <div className="eyebrow center" style={{ justifyContent: 'center' }}>
            The Project
          </div>
          <h2>More than a residence. A sense of belonging.</h2>
        </div>

        <div className={styles.projectLayout}>
          <div className={`${styles.projectMainImgWrap} reveal`}>
            <img
              src="/images/project-main.png"
              alt="Atarashii Serenity Project Detail"
              className={styles.projectMainImg}
            />
          </div>

          <div className={styles.projectSide}>
            <div className={`${styles.projectSideImgWrap} reveal reveal-delay-1`}>
              <img
                src="/images/project-interior.jpg"
                alt="Atarashii Serenity Interior"
                className={styles.projectSideImg}
              />
            </div>

            <div className={`${styles.projectPoints} reveal reveal-delay-2`}>
              {points.map((pt) => (
                <div key={pt.num} className={styles.projectPoint}>
                  <div className={styles.num}>{pt.num}</div>
                  <div>
                    <h4>{pt.title}</h4>
                    <p>{pt.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
