import React from 'react';
import styles from './CountryCard.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function CountryCard({ countryName, countrySrc }) {
  return (
    <Link href={`/ubicacion/${encodeURIComponent(countryName)}`} className={styles.container}>
      <div className={styles.container}>
        <Image
          width={200}
          height={120}
          layout="responsive"
          objectFit="cover"
          src={countrySrc}
          alt={`Bandera de ${countryName}`}
        />
        <span className={styles.spanElement}>{countryName}</span>
      </div>
    </Link>
  );
}
