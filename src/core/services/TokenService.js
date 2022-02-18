const getAccessToken = () => {
  const userData = JSON.parse(localStorage.getItem('USER_DATA'));
  return userData.access_token;
};

const setUserData = (userData) => {
  localStorage.setItem('USER_DATA', JSON.stringify(userData));
};

const getUserData = () => {
  return JSON.parse(localStorage.getItem('USER_DATA'));
};

const removeUserData = () => {
  localStorage.removeItem('USER_DATA');
};

const TokenService = {
  setUserData,
  getUserData,
  removeUserData,
  getAccessToken,
};

export default TokenService;
