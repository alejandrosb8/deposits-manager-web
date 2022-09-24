import Header from '../components/Header';
import Layout from '../components/Layout';
import Background from '../components/Background';
import Carousel from '../components/Carousel';
import styles from './../styles/Home.module.css';
import Image from 'next/image';
import CountryCard from '../components/CountryCard';
import Link from 'next/link';

const countrys = [
  {
    name: 'Venezuela',
    src: 'https://saintnet.com/wp-content/uploads/2022/01/Venezuela-272x182.png',
  },
  {
    name: 'Colombia',
    src: 'https://saintnet.com/wp-content/uploads/2022/01/Colombia-272x182.png',
  },
  {
    name: 'Costa Rica',
    src: 'https://saintnet.com/wp-content/uploads/2022/01/Costa-Rica-272x182.png',
  },
  {
    name: 'Chile',
    src: 'https://saintnet.com/wp-content/uploads/2022/01/Chile-272x182.png',
  },
  {
    name: 'Argentina',
    src: 'https://saintnet.com/wp-content/uploads/2022/01/Argentina-272x182.png',
  },
  {
    name: 'Perú',
    src: 'https://saintnet.com/wp-content/uploads/2022/01/Peru%CC%81-272x182.png',
  },
  {
    name: 'México',
    src: 'https://saintnet.com/wp-content/uploads/2022/03/Mexico-272x182.png',
  },
  {
    name: 'Estados Unidos',
    src: 'https://saintnet.com/wp-content/uploads/2022/03/Estados-Unidos-272x182.png',
  },
  {
    name: 'Guatemala',
    src: 'https://saintnet.com/wp-content/uploads/2022/01/Panama%CC%81-272x182.png',
  },
  {
    name: 'Panamá',
    src: 'https://saintnet.com/wp-content/uploads/2022/01/Panama%CC%81-272x182.png',
  },
  {
    name: 'Nicaragua',
    src: 'https://saintnet.com/wp-content/uploads/2022/01/Nicaragua-272x182.png',
  },
  {
    name: 'Curazao',
    src: 'https://saintnet.com/wp-content/uploads/2022/01/Curazao-272x182.png',
  },
];

export default function Home() {
  return (
    <>
      <Header></Header>
      <Layout title="Inicio">
        <div className={styles.pageBody}>
          <section>
            <div className={styles.carouselContainer}>
              <div className={styles.Carrusel__Home}>
                <ul>
                  <li>
                    <div className={styles.image}>
                      <Image width={220} height={100} layout="responsive" objectFit="cover" src="/Carusel1.png" alt="Imagen de Saint" />
                    </div>
                  </li>
                  <li>
                    <div className={styles.image}>
                      <Image width={220} height={100} layout="responsive" objectFit="cover" src="/Carusel3.png" alt="Imagen de Saint" />
                    </div>
                  </li>
                  <li>
                    <div className={styles.image}>
                      <Image width={220} height={100} layout="responsive" objectFit="cover" src="/Carusel5.png" alt="Imagen de Saint" />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section className={styles.InfoSection}>
            <div className={styles.InfoTextSection}>
              <h1 className={styles.title}>Gestor y administrador de locales</h1>
              <p className={styles.text}>
                Sitio web para gestionar y registrar locales de usuarios gracias al servicio ANNUAL SDK de la empresa SAINT.
              </p>
              <Link href="/locales">
                <a className={styles.linkButton}>Empezar</a>
              </Link>
            </div>
            <div>
              <Image
                width={100}
                height={100}
                layout="responsive"
                objectFit="cover"
                src="/business-animation.gif"
                alt="Animacion de personas hablando sobre ideas"
              />
            </div>
          </section>
        </div>
        {/*<h2 className={styles.subtitle}>{'¿Dónde encontrarnos?'}</h2>
        <div className={styles.countrysContainer}>
          {countrys.map((country, index) => {
            return <CountryCard key={index} countryName={country.name} countrySrc={country.src} />;
          })}
        </div>*/}
      </Layout>
    </>
  );
}
