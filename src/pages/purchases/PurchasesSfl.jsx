import React, { useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import instance from '../../axios/instance';
import useFilter from '../../core/customHook/useFilter';
import { filtersState } from '../../core/recoil/atoms';
import CategoryService from '../../core/services/CategoryService';
import PurchasesStl from './PurchasesStl';

const PurchasesSfl = () => {
  const [products, setProducts] = useState({
    loading: true,
    data: [],
  });
  const [filters, setFilters] = useRecoilState(filtersState); 
  const searchRef = useRef(null);
  const [searchText, setSearchText, resultFilter] = useFilter(products);
  
  const handleOnChangeSearch = () => {
    setSearchText(searchRef.current?.value);
  };

  const getProducts = async () => {
    try {
      setProducts({ loading: true });
      const productsx = await instance.get('/gtw-prd/products/getAll');
      const categories = await CategoryService.getAll();
      let newArray = categories.data.map(category => {return {...category, selected: false}})
      console.log('getProducts');
      setFilters(newArray);
      setProducts({ loading: false, data: productsx.data });
    } catch (error) {}
  };

  useEffect(() => {
    getProducts();
  }, []);

  
  return <PurchasesStl products={resultFilter} searchRef={searchRef} searchText={searchText} handleOnChangeSearch={handleOnChangeSearch}/>;
};

export default PurchasesSfl;
