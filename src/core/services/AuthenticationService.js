import axios from 'axios';

const SignIn = async (userToSignIn) => {
  let apiUrl =
    process.env.REACT_APP_API_URL + process.env.REACT_APP_API_PATH_SIGNIN;

  let username = process.env.REACT_APP_USERNAME_CLIENT_API;
  let password = process.env.REACT_APP_PASSWORD_CLIENT_API;

  const body = new URLSearchParams();
  body.append('grant_type', process.env.REACT_APP_GRANT_TYPE_CLIENT_API);
  body.append('username', userToSignIn.email);
  body.append('password', userToSignIn.password);

  const response = await axios.post(apiUrl, body, {
    auth: {
      username,
      password,
    },
  });

  return {
    success: response.status === 200,
    data: response.data,
  };
};

const SignUp = async (userToSignUp) => {
  let apiUrl =
    process.env.REACT_APP_API_URL + process.env.REACT_APP_API_PATH_SIGNUP;
  console.log(apiUrl);
  const response = await axios.post(apiUrl, userToSignUp, {});

  return {
    success: response.status === 200,
    data: response.data,
  };
};

const AuthenticationService = {
  SignIn,
  SignUp,
};

export default AuthenticationService;
