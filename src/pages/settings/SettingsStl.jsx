import { Button, Grid, TextField } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import AlertQhatu from '../../components/alert/AlertQhatu';

const SettingsStl = ({
  userData,
  alertMessage,
  refFirstName,
  refLastName,
  refDocumentNumber,
  handleChangeInput,
  handleClickSignUp
}) => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            autoComplete="given-name"
            name="txtFirstName"
            required
            fullWidth
            id="txtFirstName"
            label="Nombres"
            autoFocus
            inputRef={refFirstName}
            onChange={handleChangeInput}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            id="txtLastName"
            label="Apellidos"
            name="txtLastName"
            inputRef={refLastName}
            onChange={handleChangeInput}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            autoComplete="given-name"
            name="txtDocumentNumber"
            required
            fullWidth
            id="txtDocumentNumber"
            label="DNI"
            autoFocus
            inputRef={refDocumentNumber}
            onChange={handleChangeInput}
          />
        </Grid>
      </Grid>
      <Button
        type="button"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        onClick={handleClickSignUp}
      >
        Guardar
      </Button>
      <br />
      {alertMessage.visibility ? (
        <AlertQhatu message={alertMessage.message} />
      ) : null}
    </>
  );
};

export default SettingsStl