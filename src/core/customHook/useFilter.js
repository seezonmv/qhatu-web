import { useMemo, useState } from 'react';
import { useRecoilState } from 'recoil';
import { filtersState } from '../recoil/atoms';
const useFilter = (data) => {
  const [searchText, setSearchText] = useState('');
  const [resultFilter, setResultFilter] = useState([]);
  const [filters, setFilters] = useRecoilState(filtersState)

  useMemo(() => {
    const searchAllCategories = filters.every(filter => filter.selected === false);
    console.log(data.data);
    const filteredProducts = data.data?.filter((product) => {
      return `${product.name}`
        .toLowerCase()
        .includes(searchText.toLowerCase()) && 
        (filters.filter(category => category.selected === true && category.categoryId === product.categoryId).length > 0 || searchAllCategories);
    });

    setResultFilter({...data, data: filteredProducts}/* .sort((carPrev, carAfter)=>{
      let a = carPrev.lastChecked,
          b = carAfter.lastChecked;
      return a === b ? 0 : a > b ? -1 : 1;
    }) */);
  }, [searchText, data, filters]);

  return [searchText, setSearchText, resultFilter];
};

export default useFilter;