import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import styles from './../../styles/Ubicacion.module.css';
import { useRouter } from 'next/router';
import Image from 'next/image';
import countriesData from '../../utils/saintCountriesData.json';
import Header from '../../components/Header';

export default function Pais() {
  const router = useRouter();
  const { pais } = router.query;
  const [country, setCountry] = useState(
    countriesData.find((element) => {
      return element.name === pais;
    })
  );

  useEffect(() => {
    setCountry(
      countriesData.find((element) => {
        return element.name === pais;
      })
    );
  }, [pais]);

  return (
    <>
      <Header />
      <Layout title="Saint">
        <h1 className={styles.title}>{pais}</h1>
        <div className={styles.image}>
          <Image width={300} height={200} alt={pais} src={country?.image} />
        </div>
        <h2 className={styles.subTitle}>Encuéntranos en</h2>
        <ul className={styles.brachesContainer}>
          {country?.branches.map((branch, index) => {
            return (
              <li key={index}>
                <h3>{branch.name}</h3>
                <p>{`Dirreción: ${branch.address}`}</p>
                <p>{`Representante: ${branch.representative}`}</p>
                <p>{`Teléfono: ${branch.phone[0]}`}</p>
                <p>{branch?.email[0] && `Correo: ${branch.email[0]}`}</p>
                <p>{branch?.website && `Sitio web: ${branch.website}`}</p>
              </li>
            );
          })}
        </ul>
      </Layout>
    </>
  );
}
