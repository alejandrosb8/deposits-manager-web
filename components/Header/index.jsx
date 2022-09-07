import React from 'react';
import styles from './Header.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();

  const logOutHandler = () => {
    localStorage.clear();
    router.push('/login');
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image className={styles.logo__image} width={120} height={40} src="/LogoSaint.png" alt="Logo de Saint"></Image>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.listContainer}>
          <li className={styles.listElement}>
            <Link href="/">
              <a className={styles.navElement}>Inicio</a>
            </Link>
          </li>
          <li className={styles.listElement}>
            <div className={styles.dropbox}>
              <span className={styles.span}>Depositos</span>
              <div className={styles.dropboxContent}>
                <Link href="/depositos/ver">
                  <a className={styles.navElement}>Ver</a>
                </Link>
                <Link href="/depositos/agregar">
                  <a className={styles.navElement}>Agregar</a>
                </Link>
              </div>
            </div>
          </li>
          <li className={styles.listElement}>
            <button onClick={logOutHandler} className={styles.navElement}>
              Salir
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
