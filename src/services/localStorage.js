export const saveUserTokenOnLocalStorage = (token) => {
  localStorage.setItem('token', token);
};

export const getUserTokenOnLocalStorage = (token) => {
  localStorage.getItem('token', token);
};

export const isAuthenticated = () => {
  const token = !!localStorage.getItem('token');
  if (token) {
    return true;
  }
  return false;
};
