import React from 'react';
import styles from './Header.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Logouticon from '../LogoutIcon';

export default function Header() {
  const router = useRouter();

  const logOutHandler = () => {
    localStorage.clear();
    router.push('/login');
  };

  return (
    <>
      <div className={styles.headerContainer}></div>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Image
            className={styles.logo__image}
            width={120}
            height={40}
            src="/LogoSaint.png"
            alt="Logo de Saint"
          ></Image>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.listContainer}>
            <li className={styles.listElement}>
              <Link href="/">
                <a className={styles.navElement}>Inicio</a>
              </Link>
            </li>
            <li className={styles.listElement}>
              {/*
                  <div className={styles.dropbox}>
                <span className={styles.span}>{'Servicios'}</span>
                <div className={styles.dropboxContent}>
                  <Link href="/comercios">
                    <a className={styles.navElement}>Ver</a>
                  </Link>
                  <Link href="/depositos/agregar">
                    <a className={styles.navElement}>Agregar</a>
                  </Link>
                </div>
              </div>
                */}
              <Link href="/comercios">
                <a className={styles.navElement}>Comercios</a>
              </Link>
            </li>
            <li>
              <Link href="/ubicacion">
                <a className={styles.navElement}>Ubicación</a>
              </Link>
            </li>
            <li className={styles.listElement}>
              <Logouticon logOutHandler={logOutHandler} className={styles.navElement} />
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
