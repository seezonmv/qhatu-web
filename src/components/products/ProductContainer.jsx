import React from 'react';
import Grid from '@mui/material/Grid';
import ProductItem from './ProductItem';
import FilterBar from '../searchBar/FilterBar';

const ProductContainer = ({ products, searchRef, searchText, handleOnChangeSearch, filtersAndSorters, setFiltersAndSorters}) => {

  return (
    <Grid container spacing={3}>
      <FilterBar  onChangeSearch={handleOnChangeSearch} 
                  searchRef={searchRef} 
                  searchText={searchText}
                  filtersAndSorters={filtersAndSorters}
                  setFiltersAndSorters={setFiltersAndSorters} />
      {products.data.map((product) => {
        return <ProductItem product={product} key={product.id} />;
      })}
    </Grid>
  );
};

export default ProductContainer;
