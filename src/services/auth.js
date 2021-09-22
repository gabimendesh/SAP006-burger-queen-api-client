export const signInWithEmailAndPassword = (email, password) => fetch('https://lab-api-bq.herokuapp.com/auth', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  body: JSON.stringify({
    email,
    password,
  }),
});

export const signUp = (e) => {
  e.preventDefault();
  fetch('https://lab-api-bq.herokuapp.com/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      // name: values.name,
      // email: values.email,
      // password: values.password,
      // role: values.role,
      // restaurant: values.restaurant,
    }),
  })
    .then((response) => response.json())
    .then((responseDone) => {
      console.log('Pessoas cadastradas =>', responseDone);
    });
};
