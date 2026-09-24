import React, { useState } from 'react';
import styles from './VideoSection.module.scss';

export default function VideoSection() {
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.phone) {
      setSubmitted(true);
    }
  };

  return (
    <section className={styles.videoSection}>
      <div className="wrap">
        <div className={`${styles.videoHeader} reveal`}>
          <div className="eyebrow center" style={{ justifyContent: 'center' }}>
            The Project Film
          </div>
          <h2>Experience Serenity</h2>
        </div>

        <div className={`${styles.iframeWrap} reveal reveal-delay-1`}>
          <iframe
            src="https://www.youtube.com/embed/3ylvxYTq9_0?si=UYWc9nk_ZFz2Qm96"
            title="Atarashii Serenity Project Film"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className={styles.videoIframe}
          />
        </div>

        {/* Name & Phone Number Form Below Experience Serenity */}
        <div className={`${styles.formWrap} reveal reveal-delay-2`} id="contact">
          <h3>Book a Private Visit</h3>
          <p className={styles.formDesc}>Provide your details to schedule an exclusive walk-through of Atarashii Serenity.</p>
          {submitted ? (
            <div className={styles.successMsg}>
              Thank you, {formData.name}! Our sales team will get back to you shortly at {formData.phone}.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.formRow}>
              <div className={styles.inputWrap}>
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={styles.inputField}
                />
              </div>
              <div className={styles.inputWrap}>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={styles.inputField}
                />
              </div>
              <button type="submit" className={styles.submitBtn}>
                Submit Request
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
