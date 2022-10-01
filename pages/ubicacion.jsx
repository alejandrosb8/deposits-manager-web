import React, { useState } from 'react';
import countriesData from '../utils/saintCountriesData.json';
import CountryCard from '../components/CountryCard';
import Layout from '../components/Layout';
import styles from './../styles/Ubicacion.module.css';
import Header from '../components/Header';

export default function Ubicacion() {
  const [countries, setCountries] = useState(countriesData);

  return (
    <>
      <Header />
      <Layout title="Saint">
        <h1 className={styles.title}>{'¡Encuéntranos!'}</h1>
        <ul className={styles.countryContainer}>
          {countries.map((country, index) => {
            return <CountryCard key={index} countryName={country.name} countrySrc={country.image} />;
          })}
        </ul>
      </Layout>
    </>
  );
}
