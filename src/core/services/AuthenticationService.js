import axios from 'axios';

const SignIn = async (userToSignIn) => {
  let apiUrl = process.env.REACT_APP_API_URL + process.env.REACT_APP_PATH_AUTH;
  let username = process.env.REACT_APP_USERNAME_CLIENT;
  let password = '$c0t14b4nk2022';

  const body = new URLSearchParams();
  body.append('grant_type', process.env.REACT_APP_GRANT_TYPE_CLIENT);
  body.append('username', userToSignIn.email);
  body.append('password', userToSignIn.password);

  const response = await axios.post(apiUrl, body, {
    auth: {
      username,
      password,
    },
  });

  return {
    isAuthenticated: response.status === 200,
    data: response.data,
  };
};

export default SignIn;
