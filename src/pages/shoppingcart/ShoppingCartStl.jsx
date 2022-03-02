import React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { Avatar } from '@mui/material';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';

const ShoppingCartStl = ({
  products,
  refPaymentMethod,
  refComment,
  savePurchase,
}) => {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            ORDEN
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            id="txtPaymentMethod"
            name="txtPaymentMethod"
            label="Método de Pago"
            fullWidth
            variant="standard"
            inputRef={refPaymentMethod}
          />
        </Grid>
        <Grid item xs={12} sm={9}>
          <TextField
            required
            variant="standard"
            id="txtComment"
            name="txtComment"
            fullWidth
            label="Comentario"
            inputRef={refComment}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Mis Productos
          </Typography>
          <List disablePadding>
            {products.map((product) => (
              <ListItem key={product.id} sx={{ py: 1, px: 0 }}>
                <Avatar
                  variant="square"
                  sx={{ width: 100, height: 100 }}
                  alt="Remy Sharp"
                  src={product.imageUrl}
                />
                <ListItemText
                  primary={product.name}
                  secondary={'SKU:' + product.sku}
                />
                <Typography variant="body2">
                  {'S/. ' + product.salePrice}
                </Typography>
              </ListItem>
            ))}

            <ListItem sx={{ py: 1, px: 0 }}>
              <ListItemText primary="Total" />
              <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                $34.06
              </Typography>
            </ListItem>
          </List>
          <br />
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Button
                onClick={savePurchase}
                variant="contained"
                size="large"
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  marginLeft: 'auto',
                }}
              >
                Registrar
              </Button>
            </Grid>
            <Grid item container direction="column" xs={12} sm={6}></Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ShoppingCartStl;
