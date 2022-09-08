import React from 'react';
import styles from './Carousel.module.css';

export default function Carousel() {
  return (
    <div className={styles.container}>
      <div className={styles.carousel}>
        <div className={styles.carousel__face}>
          <span>This is something</span>
        </div>
        <div className={styles.carousel__face}>
          <span>Very special</span>
        </div>
        <div className={styles.carousel__face}>
          <span>Special is the key</span>
        </div>
        <div className={styles.carousel__face}>
          <span>For you</span>
        </div>
        <div className={styles.carousel__face}>
          <span>Just give it</span>
        </div>
        <div className={styles.carousel__face}>
          <span>A try</span>
        </div>
        <div className={styles.carousel__face}>
          <span>And see</span>
        </div>
        <div className={styles.carousel__face}>
          <span>How IT Works</span>
        </div>
        <div className={styles.carousel__face}>
          <span>Woow</span>
        </div>
      </div>
    </div>
  );
}
