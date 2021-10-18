/* eslint-disable no-irregular-whitespace */
import { getUserTokenOnLocalStorage } from './localStorage';

const userToken = getUserTokenOnLocalStorage();

const request = (
  endpoint,
  method,
  token,
) => fetch(`https://lab-api-bq.herokuapp.com${endpoint}`, {
  method,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `${token}`,
  },
})
  .then((response) => {
    if (!response.ok) {
      return response.json()
        .then((err) => { throw new Error(err.message); });
    }

    return response.json();
  });

export const getAllProducts = (
  token,
) => request('/products', 'GET', token);

export const getproducts = (
  email, password,
) => request('/auth', 'POST', { email, password });

const requestMenu = (
  endpoint,
  method,
  token,
  body,
) => fetch(`https://lab-api-bq.herokuapp.com${endpoint}`, {
  method,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `${token}`,
  },
  body: JSON.stringify(body),
})
  .then((response) => {
    if (!response.ok) {
      return response.json()
        .then((err) => { throw new Error(err.message); });
    }

    return response.json();
  });

export const sendItens = (
  client, table, products,
) => requestMenu('/orders', 'POST', userToken, { client, table, products });

export const getOrders = (
  token,
) => request('/orders', 'GET', token);

export const updateOrder = (
  id, status,
) => requestMenu(`/orders/${id}`, 'PUT', userToken, { status });
