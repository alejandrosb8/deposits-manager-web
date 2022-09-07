import React from 'react';
import Layout from '../components/Layout';
import styles from './../styles/Login.module.css';
import Image from 'next/image';
import { useState } from 'react';
import { getToken } from './../utils/api';
import { useRouter } from 'next/router';

export default function Login() {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSutmit = async (e) => {
    e.preventDefault();

    const $ = (selector) => document.getElementById(selector);

    const idUser = $('idUser');
    const password = $('password');
    setLoading(true);
    const data = await getToken(idUser.value, password.value);
    if (data.Status === 0) {
      localStorage.setItem('token', data.Message);
      router.push('/');
    } else {
      setError('*' + data.Message);
    }
    setLoading(false);
  };

  return (
    <Layout title={'Login'}>
      <div className={styles.background}></div>
      <div className={styles.container}>
        <div className={styles.infodiv}>
          <div className={styles.image}>
            <Image width={150} height={55} src={'/LogoSaint.png'} alt={'Logo de la compañia Saint'}></Image>
          </div>
          <div>
            <h2 className={styles.info__title}>{'Uso de servicios'}</h2>
            <p className={styles.info__text}>{'Inicia sección para disfrutar los servicios de SAINT.'}</p>
          </div>
        </div>
        <form className={styles.form} onSubmit={handleSutmit}>
          <h2 className={styles.form__title}>{'Inicio Sesión'}</h2>
          <div className={styles.form__inputContainer}>
            <input type="text" id="idUser" required placeholder={'Correo Electronico'} className={styles.form__input} />
            <input type="password" id="password" required placeholder={'Contraseña'} className={styles.form__input} />
          </div>
          {loading ? (
            <button type="submit" className={styles.form__submit_loading} disabled>
              {'Cargando...'}
            </button>
          ) : (
            <button type="submit" className={styles.form__submit}>
              {'Inicio Sesión'}
            </button>
          )}
          <p className={styles.form__errorText}>{error}</p>
        </form>
      </div>
    </Layout>
  );
}
