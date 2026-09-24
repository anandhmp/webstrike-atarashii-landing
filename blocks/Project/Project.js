import React from 'react';
import Media from '../Media/Media';
import styles from './Project.module.scss';

export default function Project() {
  const points = [
    { num: '01', title: 'Privacy', desc: 'Residences set apart, screened by landscape and distance.' },
    { num: '02', title: 'Natural Light', desc: "Orientation and openings composed around the sun's path." },
    { num: '03', title: 'Open Spaces', desc: 'Courtyards and terraces that extend living outward.' },
    { num: '04', title: 'Community', desc: 'Shared landscapes that bring residents together gently.' },
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
          <Media
            src="https://picsum.photos/seed/atarashii-landscape1/1200/1500"
            alt="Landscape"
            label="Landscape Image"
            className={`${styles.projectMainImg} reveal`}
          />

          <div className={styles.projectSide}>
            <Media
              src="https://picsum.photos/seed/atarashii-interior1/1100/800"
              alt="Interior"
              label="Interior Image"
              className={`${styles.projectSideImg} reveal reveal-delay-1`}
            />

            <div className={`${styles.projectPoints} reveal reveal-delay-2`}>
              {points.map((pt) => (
                <div key={pt.num} className={styles.projectPoint}>
                  <div className={styles.num}>{pt.num}</div>
                  <h4>{pt.title}</h4>
                  <p>{pt.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
