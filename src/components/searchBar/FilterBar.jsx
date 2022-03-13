import FilterListIcon from '@mui/icons-material/FilterList';
import SearchIcon from '@mui/icons-material/Search';
import { Box, FormControl, Grid, IconButton, Input, InputAdornment, InputLabel, MenuItem, Select, Tooltip } from '@mui/material';
import React, { useState } from 'react';
import FilterMenu from './FilterMenu';

const FilterBar = ({onChangeSearch, searchRef, searchText, filtersAndSorters, setFiltersAndSorters}) => {  

  const [anchorElUser, setAnchorElUser] = useState(null);
  
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleChange = (event) => {
    setFiltersAndSorters({...filtersAndSorters, sorter: event.target.value});
  };

  const sortMethods = [{id: 0, description: 'Menor precio'},{id: 1, description: 'Mayor precio'},{id: 2, description: 'Más vendido'}];
  return (
      <>
    <Grid item container xs={10}>
             <Input  id="inputFilterAdorment" 
                     name="search"
                     fullWidth
                     inputRef={searchRef}
                     value={searchText}
                     type="text"
                     onChange={onChangeSearch}
                     startAdornment={
                       <InputAdornment position="start">
                         <IconButton>
                          <SearchIcon />
                         </IconButton>                         
                       </InputAdornment>
                     }
                     endAdornment={
                       <InputAdornment position="end">
                         <Box sx={{ flexGrow: 0 }}>
                          <Tooltip title="Filtrar por Categoria">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                              <FilterListIcon />
                            </IconButton>
                          </Tooltip>
                          <FilterMenu anchorElUser={anchorElUser} setAnchorElUser={setAnchorElUser}/>
                        </Box>
                       </InputAdornment>
                     }
                     />
      </Grid>
      <Grid item xs={2}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Ordenar Por</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={filtersAndSorters.sorter??0}
          label="Ordenar por"
          onChange={handleChange}
        >
          {sortMethods.map( method => {return (<MenuItem key={method.id} value={method.id}>{method.description}</MenuItem>)})}
        </Select>
      </FormControl>
      </Grid>
      </>
  )
}

export default FilterBar