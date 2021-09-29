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
