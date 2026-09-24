import React, { useState, useEffect } from 'react';
import styles from './Media.module.scss';

export default function Media({ src, alt = '', label = 'Image', variant = '', className = '', children, ...props }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!src) return;
    const img = new Image();
    img.onload = () => setIsLoaded(true);
    img.src = src;
  }, [src]);

  const variantClass = variant && styles[variant] ? styles[variant] : '';
  const mediaClasses = [
    styles.media,
    isLoaded ? styles.loaded : '',
    variantClass,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={mediaClasses} {...props}>
      {src && isLoaded && <img src={src} alt={alt} />}
      {!isLoaded && (
        <div className={styles.mediaTag}>
          <div className={styles.frameMark}>
            <span></span>
          </div>
          <small>{label}</small>
        </div>
      )}
      {children}
    </div>
  );
}
