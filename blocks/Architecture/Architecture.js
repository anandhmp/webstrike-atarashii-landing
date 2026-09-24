import React from 'react';
import styles from './Architecture.module.scss';

export default function Architecture() {
  return (
    <section className={`${styles.section} bg-warm`} id="architecture">
      <div className="wrap">
        <div className={`${styles.architectureBlock} ${styles.storyRow}`}>
          <div className={`${styles.storyText} reveal`}>
            <div className="eyebrow">01 / Architecture</div>
            <h2>A Philosophy of Living, Made Tangible</h2>
            <p>
              Inspired by Japanese philosophy. Crafted for a life of balance, beauty and serenity.
            </p>
            <div className={styles.storyList}>
              <div>
                <span>Ma - Space with Purpose</span>
                <span>Designed to give every moment room to breathe.</span>
              </div>
              <div>
                <span>Shizen - Living with Nature</span>
                <span>A home where nature becomes part of your everyday rhythm.</span>
              </div>
              <div>
                <span>Omotenashi - Thoughtful Hospitality</span>
                <span>Warm, welcoming spaces that make every arrival feel special.</span>
              </div>
              <div>
                <span>Monozukuri - Crafted with Excellence</span>
                <span>Built with precision, designed to stand the test of time.</span>
              </div>
            </div>
          </div>

          <div className={`${styles.storyMedia} reveal reveal-delay-1`}>
            <img
              src="/images/architecture-exterior.jpg"
              alt="Exterior Architecture"
              width={600}
              height={800}
              className={styles.storyImg}
            />
          </div>
        </div>

        <div className={`${styles.architectureBlock} ${styles.storyRow} ${styles.reverse}`}>
          <div className={`${styles.storyText} reveal`}>
            <div className="eyebrow">02 / Lobby Experience</div>
            <h2>The Art of a Warm Welcome</h2>
            <p>
              A lobby experience inspired by boutique hospitality.
            </p>
            <div className={styles.storyList}>
              <div>
                <span>Designer Lobby</span>
                <span>A refined first impression. Warm materials, soft lighting, and timeless design.</span>
              </div>
              <div>
                <span>Resident Café</span>
                <span>Savor, connect, unwind. A relaxed café setting to start your day or pause in between.</span>
              </div>
              <div>
                <span>Coffee Machine</span>
                <span>Barista-style convenience. Freshly brewed, anytime you need.</span>
              </div>
              <div>
                <span>Curated Library</span>
                <span>A quiet corner for inspiration and escape. Books, light, and calm.</span>
              </div>
              <div>
                <span>Vending Convenience</span>
                <span>Thoughtful essentials, always within reach, discreet and convenient.</span>
              </div>
              <div>
                <span>Biometric Access</span>
                <span>Seamless entry. Secure, private, and effortlessly modern.</span>
              </div>
              <div>
                <span>Warm Hospitality Led Design</span>
                <span>Crafted for comfort. Every detail designed to make you feel at home.</span>
              </div>
            </div>
          </div>

          <div className={`${styles.storyMedia} ${styles.wide} reveal reveal-delay-1`}>
            <img
              src="/images/lobby-experience.jpg"
              alt="Lobby Experience"
              width={800}
              height={600}
              className={styles.storyImg}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
