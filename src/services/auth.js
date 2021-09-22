fetch('lab-api-bq.herokuapp.com/users', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(),
})
  .then(async (serverResponse) => {
    const dataResponse = await serverResponse.json();
    const { token } = dataResponse;
    console.log(serverResponse, token);
  });
