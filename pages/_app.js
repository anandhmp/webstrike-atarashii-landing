import React, { useEffect } from 'react';
import '../styles/globals.scss';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in');
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
      );
      reveals.forEach((el) => io.observe(el));
      return () => io.disconnect();
    } else {
      reveals.forEach((el) => el.classList.add('in'));
    }
  }, []);

  return <Component {...pageProps} />;
}
