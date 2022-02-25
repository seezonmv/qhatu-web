import React, { useEffect, useState } from 'react';
import instance from '../../axios/instance';
import CardLoader from '../../components/loader/CardLoader';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Purchases = () => {
  const [products, setProducts] = useState({
    loading: true,
    data: undefined,
  });
  const getProducts = async () => {
    try {
      setProducts({ loading: true });
      const products = await instance.get('/gtw-prd/products/getAll');
      setProducts({ loading: false, data: products.data });
    } catch (error) {}
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={8}></Grid>
        <Grid item xs={8} sx={{ textAlign: 'right' }}></Grid>
      </Grid>
      <br />
      {products.loading ? (
        <CardLoader />
      ) : (
        <Grid container spacing={3}>
          {products.data.map((product) => {
            return (
              <Grid item xs={3} key={product.id}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="250"
                    image={product.imageUrl}
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      SKU: {product.sku}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {product.category.name}
                    </Typography>
                    <Typography gutterBottom component="div" height={50}>
                      {product.name}
                    </Typography>
                    <Typography variant="body2">
                      S/. {product.salePrice}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        marginLeft: 'auto',
                      }}
                      size="small"
                      color="success"
                    >
                      <AddShoppingCartIcon />
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      )}
    </>
    // <>
    //   <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
    //     <h1 className="h2">Compras</h1>
    //   </div>
    //   {products.loading ? (
    //     <CardLoader />
    //   ) : (
    //     <>
    //       <div className="row row-cols-md-2">
    //         {products.data.map((product) => {
    //           return (
    //             <div
    //               key={product.id}
    //               className="card mb-3"
    //               style={{ marginRight: '10px', width: '540px' }}
    //             >
    //               <div className="row">
    //                 <div className="col-md-4">
    //                   <img
    //                     style={{ marginLeft: '-12px' }}
    //                     src={product.imageUrl}
    //                     alt="Character"
    //                     className="bd-placeholder-img"
    //                     height="200"
    //                     width="200"
    //                   />
    //                 </div>
    //                 <div className="col-md-8">
    //                   <div className="card-body">
    //                     <h5 className="card-title">{product.name}</h5>
    //                     <p className="card-text">
    //                       {product.category.name}
    //                       <br />
    //                       {product.sku}
    //                     </p>
    //                     <p className="card-text">
    //                       <small className="text-muted">
    //                         S/. {product.salePrice}
    //                       </small>
    //                     </p>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           );
    //         })}
    //       </div>
    //     </>
    //   )}
    // </>
  );
};

export default Purchases;
