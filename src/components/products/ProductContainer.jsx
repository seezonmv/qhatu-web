import React from 'react';
import Grid from '@mui/material/Grid';
import ProductItem from './ProductItem';

const ProductContainer = ({ products }) => {
  return (
    <Grid container spacing={3}>
      {products.data.map((product) => {
        return <ProductItem product={product} />;
      })}
    </Grid>
  );
};

export default ProductContainer;
