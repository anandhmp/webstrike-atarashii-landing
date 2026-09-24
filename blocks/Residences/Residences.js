import React from 'react';
import Media from '../Media/Media';
import styles from './Residences.module.scss';

export default function Residences() {
  const residences = [
    {
      tag: 'Experience 01',
      title: 'Central Atrium',
      meta: 'Where nature cascades into serenity.',
      desc: 'A breathtaking central atrium featuring a cascading waterfall and tranquil koi pond, creating a living heart for the community.',
      src: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80',
      label: 'Central Atrium Image',
    },
    {
      tag: 'Experience 02',
      title: 'Infinity Pool',
      meta: 'Where horizon meets water.',
      desc: 'A stunning infinity-edge pool that appears to merge with the sky, offering an unparalleled swimming experience.',
      src: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1000&q=80',
      label: 'Infinity Pool Image',
    },
    {
      tag: 'Experience 03',
      title: 'Gazebo Seating Area',
      meta: 'Conversations under open skies.',
      desc: 'Elegantly designed gazebos scattered through landscaped gardens, perfect for intimate gatherings or quiet reflection.',
      src: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80',
      label: 'Gazebo Seating Image',
    },
    {
      tag: 'Experience 04',
      title: 'Mini Golf Course',
      meta: 'Play among the greens.',
      desc: 'A professionally designed mini golf course set within manicured landscapes, bringing resort-style leisure to your doorstep.',
      src: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=1000&q=80',
      label: 'Mini Golf Course Image',
    },
    {
      tag: 'Experience 05',
      title: 'Sky Gazing Platform',
      meta: 'Touch the stars.',
      desc: 'An elevated observation deck equipped with a powered telescope for stargazing nights and celestial exploration.',
      src: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1000&q=80',
      label: 'Sky Gazing Platform Image',
    },
    {
      tag: 'Experience 06',
      title: 'Home Theater',
      meta: 'Cinema. Reimagined.',
      desc: 'A state-of-the-art private theater with plush seating, Dolby Atmos sound, and 4K laser projection for an immersive viewing experience.',
      src: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1000&q=80',
      label: 'Home Theater Image',
    },
    {
      tag: 'Experience 07',
      title: 'Fitness Center',
      meta: 'Strength meets serenity.',
      desc: 'A world-class gymnasium featuring premium equipment, personal training zones, and floor-to-ceiling windows overlooking the gardens.',
      src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80',
      label: 'Fitness Center Image',
    },
    {
      tag: 'Experience 08',
      title: 'BBQ & Outdoor Dining',
      meta: 'Gather around the flame.',
      desc: 'An open-air culinary haven featuring designer grilling stations, a stylish bar counter, and plush lounge seating—all framed by swaying palms and sunset views.',
      src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80',
      label: 'BBQ & Outdoor Dining Image',
    },
    {
      tag: 'Experience 09',
      title: 'Rooftop Party Terrace',
      meta: 'Celebrate above it all.',
      desc: 'An expansive rooftop entertainment space with panoramic views, ideal for celebrations, gatherings, and sunset cocktails.',
      src: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1000&q=80',
      label: 'Rooftop Party Terrace Image',
    },
    {
      tag: 'Experience 10',
      title: 'Zen Garden',
      meta: 'Find your center.',
      desc: 'A meticulously designed Japanese-inspired garden with raked gravel, meditation stones, and carefully placed greenery for contemplative walks.',
      src: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1000&q=80',
      label: 'Zen Garden Image',
    },
    {
      tag: 'Experience 11',
      title: 'Association Hall',
      meta: 'Where community comes together.',
      desc: 'A versatile multi-purpose hall for community events, celebrations, meetings, and cultural gatherings.',
      src: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1000&q=80',
      label: 'Association Hall Image',
    },
    {
      tag: 'Experience 12',
      title: 'Amenities',
      meta: 'More to Experience. Every Day.',
      desc: 'From tranquil gardens and resort-style leisure to wellness, entertainment and spaces to come together, Serenity brings a thoughtfully curated lifestyle within reach.',
      src: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1000&q=80',
      label: 'Association Hall Image',
    },
  ];

  return (
    <section className={`${styles.section} bg-warm`} id="residences">
      <div className="wrap">
        <div className={`${styles.resHead} reveal`}>
          <div>
            <div className="eyebrow">The Experiences &amp; Amenities</div>
            <h2>Private spaces, thoughtfully composed.</h2>
          </div>
          <p className={styles.resSub}>
            An unparalleled collection of lifestyle amenities crafted for wellness, leisure, and community.
          </p>
        </div>

        <div className={`${styles.resGrid} reveal reveal-delay-1`}>
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
                  Explore Space
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
