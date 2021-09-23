export const saveUserTokenOnLocalStorage = (token) => {
  localStorage.setItem('token', token);
};

export const getUserTokenOnLocalStorage = (token) => {
  localStorage.getItem('token', token);
};
