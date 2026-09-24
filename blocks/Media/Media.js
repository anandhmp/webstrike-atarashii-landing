import React, { useState } from 'react';
import styles from './Media.module.scss';

export default function Media({ src, alt = '', label = 'Image', variant = '', className = '', children, ...props }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const variantClass = variant && styles[variant] ? styles[variant] : '';
  const mediaClasses = [
    styles.media,
    isLoaded ? styles.loaded : '',
    variantClass,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={mediaClasses} {...props}>
      {src && !hasError && (
        <img
          src={src}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          style={{
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.8s ease-in-out',
          }}
        />
      )}
      {(!isLoaded || hasError) && (
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
