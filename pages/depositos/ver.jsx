import React from 'react';
import Header from '../../components/Header';
import Layout from '../../components/Layout';
import Background from '../../components/Background';
import { getDeposits } from '../../utils/api';
import { useEffect, useState } from 'react';
import styles from './../../styles/Ver.module.css';
import { useRouter } from 'next/router';
import LoadingIcon from '../../components/LoadingIcon';
import { SearchIcon } from '../../components/SearchIcon';
import { TrashIcon } from '../../components/TrashIcon';
import { deleteDeposit } from '../../utils/api';

export default function Ver() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [dataDynamic, setDataDynamic] = useState([]);

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

  const handleClick = async (code) => {
    const query = deleteDeposit(code, localStorage.getItem('token'));
    if (query.Status == 2) {
      router.push('/login');
    } else {
      router.reload();
    }
  };

  const fetchData = async (token) => {
    setLoading(true);
    const newData = await getDeposits(token);

    if (newData.Status == 0) {
      setData(newData.Data);
      setDataDynamic(newData.Data);
      setLoading(false);
    } else {
      localStorage.clear();
      router.push('/login');
    }
  };
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetchData(token);
    } else {
      router.push('/login');
    }
  }, []);
  return (
    <>
      {loading && (
        <div className={styles.blacker}>
          <LoadingIcon />
        </div>
      )}
      <Header />
      <Layout title="Saint - Depositos">
        <Background />
        <h1 className={styles.title}>Lista de Depositos</h1>
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
                <td>Codigo</td>
                <td>Nombre</td>
                <td>{'Dirección'}</td>
                <td>Representante</td>
                <td>Telefono</td>
                <td>Borrar</td>
              </tr>
              {Array.from(dataDynamic).map((dataElement, index) => {
                const code = dataElement.Codigo;
                return (
                  <tr key={index} className={styles.tableRow}>
                    <td>{dataElement.Codigo}</td>
                    <td>{dataElement.Descripcion}</td>
                    <td>{dataElement.Direccion1}</td>
                    <td>{dataElement.Representante}</td>
                    <td>{dataElement.Telefono}</td>
                    <td>
                      <button onClick={() => handleClick(code)} className={styles.trashIcon}>
                        <TrashIcon color="#000" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Layout>
    </>
  );
}
