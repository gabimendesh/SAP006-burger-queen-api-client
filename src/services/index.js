import { getUserTokenOnLocalStorage } from './localStorage';

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
  })
  .catch((error) => console.log('error', error));

export const sendItens = (
  client, table, products,
) => {
  const token = getUserTokenOnLocalStorage;
  requestMenu('/orders', 'POST', token, { client, table, products });
};

const requestOrders = (
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
  .then((response) => response.json());

export const getOrders = (
  token,
) => requestOrders('/orders', 'GET', token);
