import React from 'react';
import Grid from '@mui/material/Grid';
import ProductContainer from '../../components/products/ProductContainer';
import CardLoader from '../../components/loader/CardLoader';

const PurchasesStl = ({ products, searchRef, searchText, handleOnChangeSearch, filtersAndSorters, setFiltersAndSorters }) => {
  
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
        <ProductContainer   products={products}  
                            searchRef={searchRef} 
                            searchText={searchText} 
                            handleOnChangeSearch={handleOnChangeSearch}
                            filtersAndSorters={filtersAndSorters}
                            setFiltersAndSorters={setFiltersAndSorters}/>
      )}
    </>
  );
};

export default PurchasesStl;
