import React from 'react';
import Header from '../components/Header';
import Layout from '../components/Layout';
import { useEffect, useState } from 'react';
import styles from './../styles/Ver.module.css';
import addModule from './../styles/Agregar.module.css';
import { useRouter } from 'next/router';
import LoadingIcon from '../components/LoadingIcon';
import { SearchIcon } from '../components/SearchIcon';
import { deleteDeposit, addDeposit, getDeposits, updateDeposit } from '../utils/api';

export default function Locales() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [dataDynamic, setDataDynamic] = useState([]);
  const [code, setCode] = useState('');

  const handleInput = () => {
    const search = document.getElementById('searchInput');
    function filterItems(query) {
      return data.filter(function (el) {
        if (el.Codigo.toLowerCase().indexOf(query.toLowerCase()) > -1) {
          return true;
        } else if (el.Descripcion.toLowerCase().indexOf(query.toLowerCase()) > -1) {
          return true;
        } else if (el.Direccion1.toLowerCase().indexOf(query.toLowerCase()) > -1) {
          return true;
        } else if (el.Representante.toLowerCase().indexOf(query.toLowerCase()) > -1) {
          return true;
        } else if (el.Telefono.toLowerCase().indexOf(query.toLowerCase()) > -1) {
          return true;
        }
        return false;
      });
    }
    setDataDynamic(filterItems(search.value));
  };

  /*const handleClick = async (code) => {
    const query = await deleteDeposit(code, localStorage.getItem('token'));
    if (query.Status == -2) {
      router.push({
        pathname: '/login',
        query: { redirect: 'depositos' },
      });
    } else {
      router.reload();
    }
  };*/

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
      const submitUpdateData = await updateDeposit(deposito, token);
      if (submitUpdateData.Status !== 0) {
        alert(submitUpdateData.Status);
      }
    } else {
      alert(submitData.Status);
    }

    fetchData(token);
  };

  const fetchData = async (token) => {
    setLoading(true);
    const newData = await getDeposits(token);

    if (newData.Status == 0) {
      const dataToSave = Array.from(newData.Data).filter((row) => {
        if (row.Codigo && row.Descripcion && row.Direccion1 && row.Representante && row.Telefono) {
          return true;
        }

        return false;
      });

      setData(dataToSave);
      setDataDynamic(dataToSave);
      setLoading(false);
    } else {
      localStorage.clear();
      router.push({
        pathname: '/login',
        query: { redirect: 'depositos' },
      });
    }
  };
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetchData(token);
    } else {
      router.push({
        pathname: '/login',
        query: { redirect: 'depositos' },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (e) => {
    const nombre = document.getElementById('nombre');
    const direccion = document.getElementById('direccion');
    const representante = document.getElementById('representante');
    const telefono = document.getElementById('telefono');

    const newCode = e?.target?.value || document.getElementById('codigo').value;
    setCode(newCode);
    const rowData = data.find((row) => row.Codigo === newCode);
    if (rowData?.Codigo === newCode) {
      nombre.value = rowData.Descripcion;
      direccion.value = rowData.Direccion1;
      representante.value = rowData.Representante;
      telefono.value = rowData.Telefono;
    } else {
      nombre.value = '';
      direccion.value = '';
      representante.value = '';
      telefono.value = '';
    }
  };

  const handleClickCode = (e) => {
    document.getElementById('codigo').value = e.target.textContent;
    handleChange();
  };

  const handleDelete = async (e) => {
    const token = localStorage.getItem('token');
    const query = await deleteDeposit(code, token);
    if (query.Status == -2) {
      router.push({
        pathname: '/login',
        query: { redirect: 'depositos' },
      });
    } else {
      document.getElementById('codigo').value = '';
      document.getElementById('nombre').value = '';
      document.getElementById('direccion').value = '';
      document.getElementById('representante').value = '';
      document.getElementById('telefono').value = '';
      fetchData(token);
    }
  };
  return (
    <>
      {loading && (
        <div className={styles.blacker}>
          <LoadingIcon />
        </div>
      )}
      {!loading && <Header />}
      <Layout title={'Saint'}>
        <div className={styles.gridContainer}>
          <section className={styles.infoSection}>
            <h1 className={styles.title}>{'Lista de locales'}</h1>
            <div className={styles.form}>
              <div className={styles.searchIcon}>
                <SearchIcon color="#444" />
              </div>
              <input onInput={handleInput} className={styles.searchInput} type="text" id="searchInput" placeholder="Buscar..." />
            </div>
            <div className={styles.tableContainer}>
              <table className={styles.container}>
                <tbody>
                  <tr className={styles.tableHeader}>
                    <td>Código</td>
                    <td>Nombre</td>
                    <td>{'Dirección'}</td>
                    <td>Representante</td>
                    <td>Teléfono</td>
                  </tr>
                  {Array.from(dataDynamic).map((dataElement, index) => {
                    const code = dataElement.Codigo;
                    return (
                      <tr key={index} className={styles.tableRow}>
                        <td onClick={handleClickCode} className={styles.codeText}>
                          {dataElement.Codigo}
                        </td>
                        <td>{dataElement.Descripcion}</td>
                        <td>{dataElement.Direccion1}</td>
                        <td>{dataElement.Representante}</td>
                        <td>{dataElement.Telefono}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </section>
          <section className={styles.editSection}>
            <h2 className={addModule.title}>{'Agregar, editar o borrar un local'}</h2>
            <form onSubmit={handleSubmit} className={addModule.form}>
              <div className={addModule.inputContainer}>
                <div className={addModule.inputGroup}>
                  <label htmlFor="codigo">{'Código'}</label>
                  <input onChange={handleChange} type="text" placeholder="Ejemplo: 01" id="codigo" required />
                </div>
                <div className={addModule.inputGroup}>
                  <label htmlFor="nombre">Nombre</label>
                  <input type="text" placeholder="Ejemplo: Mi depósito" id="nombre" required />
                </div>
                <div className={addModule.inputGroup}>
                  <label htmlFor="direccion">{'Dirección'}</label>
                  <input type="text" placeholder="Ejemplo: Avenida 7 Calle 8" id="direccion" required />
                </div>
                <div className={addModule.inputGroup}>
                  <label htmlFor="representante">Representante</label>
                  <input type="text" placeholder="Ejemplo: Manuel Carroz" id="representante" required />
                </div>
                <div className={addModule.inputGroup}>
                  <label htmlFor="telefono">{'Teléfono'}</label>
                  <input type="tel" placeholder="Ejemplo: 4124546867" id="telefono" pattern="[0-9]{10}" required />
                </div>
              </div>
              <div className={addModule.buttonGroup}>
                {loading ? (
                  <button type="button" disabled>
                    Cargando...
                  </button>
                ) : (
                  <button type="button" onClick={handleDelete}>
                    Eliminar
                  </button>
                )}
                {loading ? (
                  <button type="submit" disabled>
                    Cargando...
                  </button>
                ) : (
                  <button type="submit">Cargar</button>
                )}
              </div>
            </form>
          </section>
        </div>
      </Layout>
    </>
  );
}
