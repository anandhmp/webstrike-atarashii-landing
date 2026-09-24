import React from 'react';
import styles from './Gallery.module.scss';

export default function Gallery() {
  const images = [
    { src: '/images/gallery-1.jpg', alt: 'Atarashii Bedroom Suite' },
    { src: '/images/gallery-2.jpg', alt: 'Atarashii Modern Bathroom' },
    { src: '/images/gallery-3.jpg', alt: 'Atarashii Modular Kitchen' },
    { src: '/images/gallery-4.jpg', alt: 'Atarashii Kitchen Counter & Window' },
    { src: '/images/gallery-5.jpg', alt: 'Atarashii Dining Room' },
    { src: '/images/gallery-6.jpg', alt: 'Atarashii Living Room & Wood Slats' },
    { src: '/images/gallery-7.jpg', alt: 'Atarashii Dining Space View' },
    { src: '/images/gallery-8.jpg', alt: 'Atarashii Ensuite Bathroom' },
    { src: '/images/gallery-9.jpg', alt: 'Atarashii Vanity Mirror & Fixtures' },
    { src: '/images/gallery-10.jpg', alt: 'Atarashii Balcony Garden' },
    { src: '/images/gallery-11.jpg', alt: 'Atarashii Zen Niche & Waterfall' },
  ];

  return (
    <section className={styles.section} id="gallery">
      <div className="wrap">
        <div className={`${styles.galleryHead} reveal`}>
          {/* <div className="eyebrow">Gallery</div> */}
          <h2>Gallery</h2>
        </div>

        <div className={styles.grid}>
          {images.map((img, index) => (
            <div key={index} className={`${styles.item} reveal reveal-delay-${(index % 4) + 1}`}>
              <img src={img.src} alt={img.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
