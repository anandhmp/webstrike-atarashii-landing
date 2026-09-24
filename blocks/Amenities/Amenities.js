import React from 'react';
import Media from '../Media/Media';
import styles from './Amenities.module.scss';

export default function Amenities() {
  const amenitiesList = [
    { index: '01', name: 'Private Clubhouse', src: 'https://picsum.photos/seed/atarashii-amenity1/600/450', variant: '' },
    { index: '02', name: 'Wellness Centre', src: 'https://picsum.photos/seed/atarashii-amenity2/600/450', variant: 'stone' },
    { index: '03', name: 'Swimming Pool', src: 'https://picsum.photos/seed/atarashii-amenity3/600/450', variant: '' },
    { index: '04', name: 'Landscaped Gardens', src: 'https://picsum.photos/seed/atarashii-amenity4/600/450', variant: 'stone' },
    { index: '05', name: 'Fitness Studio', src: 'https://picsum.photos/seed/atarashii-amenity5/600/450', variant: '' },
    { index: '06', name: "Children's Spaces", src: 'https://picsum.photos/seed/atarashii-amenity6/600/450', variant: 'stone' },
    { index: '07', name: 'Social Lounge', src: 'https://picsum.photos/seed/atarashii-amenity7/600/450', variant: '' },
    { index: '08', name: 'Walking Trails', src: 'https://picsum.photos/seed/atarashii-amenity8/600/450', variant: 'stone' },
  ];

  return (
    <section className={`${styles.section} bg-ivory`} id="amenities">
      <div className="wrap">
        <div className={`${styles.amenityHero} reveal`}>
          <Media
            src="https://picsum.photos/seed/atarashii-spa/2000/860"
            alt="Spa / Wellness"
            label="Spa / Wellness Image"
          />
          <div className={styles.amenityHeroText}>
            <div className="eyebrow center" style={{ justifyContent: 'center' }}>
              Amenities
            </div>
            <h2>Spaces designed around how you live.</h2>
          </div>
        </div>

        <div className={styles.amenityRows}>
          {amenitiesList.map((item) => (
            <div key={item.index} className={`${styles.amenityRow} reveal`}>
              <div className={styles.amenityIndex}>{item.index}</div>
              <div className={styles.amenityName}>{item.name}</div>
              <Media
                src={item.src}
                alt={item.name}
                label="Amenity Image"
                variant={item.variant}
                className={styles.amenityThumb}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
