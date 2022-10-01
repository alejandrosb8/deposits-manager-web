import Header from '../components/Header';
import Layout from '../components/Layout';
import styles from './../styles/Home.module.css';
import Image from 'next/image';
import Link from 'next/link';

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
                      <Image
                        width={220}
                        height={100}
                        layout="responsive"
                        objectFit="cover"
                        src="/Carusel1.png"
                        alt="Imagen de Saint"
                      />
                    </div>
                  </li>
                  <li>
                    <div className={styles.image}>
                      <Image
                        width={220}
                        height={100}
                        layout="responsive"
                        objectFit="cover"
                        src="/Carusel3.png"
                        alt="Imagen de Saint"
                      />
                    </div>
                  </li>
                  <li>
                    <div className={styles.image}>
                      <Image
                        width={220}
                        height={100}
                        layout="responsive"
                        objectFit="cover"
                        src="/Carusel5.png"
                        alt="Imagen de Saint"
                      />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section className={styles.InfoSection}>
            <div className={styles.InfoTextSection}>
              <h1 className={styles.title}>Gestor y administrador de comercios</h1>
              <p className={styles.text}>
                Sitio web para gestionar y registrar comercios de usuarios gracias al servicio ANNUAL SDK de la empresa
                SAINT.
              </p>
              <Link href="/comercios">
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
