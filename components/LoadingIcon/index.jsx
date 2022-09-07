import React from 'react';
import styles from './LoadingIcon.module.css';

export default function LoadingIcon() {
  return (
    <div className={styles.lds__ring}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
