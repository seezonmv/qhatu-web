import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import AlertQhatu from '../../components/alert/AlertQhatu';

const LoginStl = ({
  refEmail,
  refPassword,
  handleChangeInput,
  handleClickSignIn,
  alertMessage,
}) => {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar
          sx={{ m: 1, bgcolor: 'default.main', width: 56, height: 75 }}
          src="https://cdn-icons-png.flaticon.com/128/6769/6769119.png"
        />
        <Typography component="h1" variant="h5">
          Iniciar Sesión
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            type="email"
            margin="normal"
            required
            fullWidth
            id="txtEmail"
            label="Correo Electronico"
            name="txtEmail"
            autoFocus
            inputRef={refEmail}
            onChange={handleChangeInput}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="txtPassword"
            label="Contraseña"
            type="password"
            id="txtPassword"
            inputRef={refPassword}
            onChange={handleChangeInput}
          />
          <Button
            type="button"
            fullWidth
            variant="contained"
            onClick={handleClickSignIn}
            sx={{ mt: 3, mb: 2 }}
          >
            Ingresar
          </Button>
          <Grid container>
            <Grid item>
              <Link to="/register" variant="body2">
                {'¿No tienes una cuenta? Registrate'}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <br />
      {alertMessage.visibility ? (
        <AlertQhatu message={alertMessage.message} />
      ) : null}
    </Container>
  );
};

export default LoginStl;
