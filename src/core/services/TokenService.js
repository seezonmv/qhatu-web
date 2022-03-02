const getAccessToken = () => {
  const userData = JSON.parse(localStorage.getItem('USER_DATA'));
  return userData.access_token;
};

const getRefreshToken = () => {
  const userData = JSON.parse(localStorage.getItem('USER_DATA'));
  return userData.refresh_token;
};

const setUserData = (userData) => {
  localStorage.setItem('USER_DATA', JSON.stringify(userData));
};

const getUserData = () => {
  return JSON.parse(localStorage.getItem('USER_DATA'));
};

const getUserId = () => {
  const userData = getUserData();
  return userData.id;
};

const updateAccessToken = (token) => {
  const userData = JSON.parse(localStorage.getItem('USER_DATA'));
  userData.access_token = token;
  setUserData(userData);
};

const removeUserData = () => {
  localStorage.removeItem('USER_DATA');
};

const TokenService = {
  setUserData,
  getUserData,
  removeUserData,
  getAccessToken,
  getRefreshToken,
  updateAccessToken,
  getUserId,
};

export default TokenService;
