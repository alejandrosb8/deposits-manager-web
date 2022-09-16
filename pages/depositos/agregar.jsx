import { useState } from 'react';
import Header from '../../components/Header';
import Layout from '../../components/Layout';
import Background from '../../components/Background';
import styles from './../../styles/Agregar.module.css';
import { addDeposit } from '../../utils/api';
import { useRouter } from 'next/router';

export default function Agregar() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token');

    const codigo = document.getElementById('codigo');
    const nombre = document.getElementById('nombre');
    const direccion = document.getElementById('direccion');
    const representante = document.getElementById('representante');
    const telefono = document.getElementById('telefono');

    const deposito = {
      Codigo: codigo.value,
      Descripcion: nombre.value,
      Direccion1: direccion.value,
      Representante: representante.value,
      Telefono: telefono.value,
    };

    setLoading(true);
    const submitData = await addDeposit(deposito, token);

    if (submitData.Status === 0) {
      codigo.value = '';
      nombre.value = '';
      direccion.value = '';
      representante.value = '';
      telefono.value = '';
      alert('Deposito agregado con exito');
    } else if (submitData.Status == -2) {
      sessionStorage.clear('token');
      router.push('/login');
    } else if (submitData.Status == -98) {
      alert('El código introducido ya existe');
    } else {
      alert(submitData.Status);
    }

    setLoading(false);
  };

  return (
    <>
      <Header />
      <Background />
      <Layout title={'Saint'}>
        <h1 className={styles.title}>{'Agregar un establecimiento'}</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputContainer}>
            <div className={styles.inputGroup}>
              <label htmlFor="codigo">{'Código'}</label>
              <input type="text" placeholder="Ejemplo: 01" id="codigo" required />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="nombre">Nombre</label>
              <input type="text" placeholder="Ejemplo: Mi depósito" id="nombre" required />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="direccion">{'Dirección'}</label>
              <input type="text" placeholder="Ejemplo: Avenida 7 Calle 8" id="direccion" required />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="representante">Representante</label>
              <input type="text" placeholder="Ejemplo: Manuel Carroz" id="representante" required />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="telefono">{'Teléfono'}</label>
              <input type="tel" placeholder="Ejemplo: 4124546867" id="telefono" pattern="[0-9]{10}" required />
            </div>
          </div>
          {loading ? (
            <button type="submit" disabled>
              Cargando...
            </button>
          ) : (
            <button type="submit">Agregar</button>
          )}
        </form>
      </Layout>
    </>
  );
}
