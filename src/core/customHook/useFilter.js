import { useMemo, useState } from 'react';
import { useRecoilState } from 'recoil';
import { filtersAndSortersState } from '../recoil/atoms';
const useFilter = (data) => {
  const [searchText, setSearchText] = useState('');
  const [resultFilter, setResultFilter] = useState([]);
  const [filtersAndSorters, setFiltersAndSorters] = useRecoilState(filtersAndSortersState);

  useMemo(() => {
    const searchAllCategories = filtersAndSorters.filter.every(filter => filter.selected === false);
    const filteredProducts = data.data?.filter((product) => {
      return `${product.name}`
        .toLowerCase()
        .includes(searchText.toLowerCase()) && 
        (filtersAndSorters.filter.filter(category => category.selected === true && category.categoryId === product.categoryId).length > 0 || searchAllCategories);
    });

    setResultFilter({...data, data: filteredProducts?.sort((productPrev, productNext)=>{
      let sortOrder = 0; 
      switch (filtersAndSorters.sorter) {
        case 0:
          let salePriceAAsc = productPrev.salePrice,
              salePriceBAsc = productNext.salePrice;
          if(salePriceAAsc !== salePriceBAsc){
            if(salePriceAAsc < salePriceBAsc){ 
              sortOrder = -1;
            }else{
              sortOrder = 1;
            }
          }
          break;
        case 1:
          let salePriceADesc = productPrev.salePrice,
              salePriceBDesc = productNext.salePrice;
          if(salePriceADesc !== salePriceBDesc){
            if(salePriceADesc > salePriceBDesc){ 
              sortOrder = -1;
            }else{
              sortOrder = 1;
            }
          }
          break;
        case 2:
          let stockADesc = productPrev.stock,
              stockBDesc = productNext.stock;
          if(stockADesc!==stockBDesc){
            if(stockADesc>stockBDesc){
              sortOrder = -1;
            }else{
              sortOrder = 1;
            }
          }
          break;
        default:
          break;
      }
      return sortOrder;
      
    })}  );
  }, [searchText, data, filtersAndSorters]);

  return [searchText, setSearchText, resultFilter];
};

export default useFilter;