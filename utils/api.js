const url = 'https://annual-sdk-api.onrender.com/api/v1';
const axios = require('axios');

export const getToken = async (idUser, password) => {
  try {
    const resp = await axios.post(`${url}/login`, { idUser, password });
    return resp.data;
  } catch (error) {
    console.log(error);
  }
};

export const getDeposits = async (token) => {
  try {
    const resp = await axios.post(`${url}/deposits/list`, { token });
    return resp.data;
  } catch (error) {
    console.log(error);
  }
};

export const addDeposit = async (deposito, token) => {
  try {
    const resp = await axios.post(`${url}/deposits/add`, { deposito, token });
    return resp.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteDeposit = async (codigoDeposito, token) => {
  try {
    const resp = await axios.post(`${url}/deposits/delete`, { codigoDeposito, token });
    return resp.data;
  } catch (error) {
    console.log(error);
  }
};
