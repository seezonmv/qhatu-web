import FilterListIcon from '@mui/icons-material/FilterList';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Grid, IconButton, Input, InputAdornment, Tooltip } from '@mui/material';
import React, { useState } from 'react';
import FilterMenu from './FilterMenu';

const FilterBar = ({onChangeSearch, searchRef, searchText}) => {  

  const [anchorElUser, setAnchorElUser] = useState(null);
  
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  return (
      <>
    <Grid item container >
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
      </>
  )
}

export default FilterBar