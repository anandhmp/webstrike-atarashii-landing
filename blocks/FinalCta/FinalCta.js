import React from 'react';
import styles from './FinalCta.module.scss';

export default function FinalCta() {
  return (
    <section className={`bg-deep ${styles.finalCta}`} id="visit">
      <div className="wrap">
        <div className="eyebrow center" style={{ justifyContent: 'center' }}>
          Private Consultation
        </div>
        <h2 className="reveal" style={{ marginTop: '22px' }}>
          Come home to Serenity.
        </h2>
        <p className="reveal reveal-delay-1">
          Discover the residences, architecture, and experience of Atarashii Serenity through a private consultation.
        </p>
        <div className={`${styles.finalActions} reveal reveal-delay-2`}>
          <a href="#" className="btn btn-gold">Book a Private Visit</a>
          <a href="#" className="btn btn-ghost-light">Request Project Details</a>
        </div>
      </div>
    </section>
  );
}
