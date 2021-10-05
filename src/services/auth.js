const request = (
  endpoint,
  method,
  body,
) => fetch(`https://lab-api-bq.herokuapp.com${endpoint}`, {
  method,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
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

export const signInWithEmailAndPassword = (
  email, password,
) => request('/auth', 'POST', { email, password });

export const signUp = (
  name,
  email,
  password,
  role,
  restaurant,
) => request('/users', 'POST', {
  name,
  email,
  password,
  role,
  restaurant,
});
