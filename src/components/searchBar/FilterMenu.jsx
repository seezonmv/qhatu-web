import { Box, FormControl, FormControlLabel, FormGroup, FormLabel, Menu, MenuItem, Switch } from '@mui/material';
import React from 'react';
import { useRecoilState } from 'recoil';
import { filtersAndSortersState } from '../../core/recoil/atoms';

const FilterMenu = ({ anchorElUser, setAnchorElUser}) => {
    const [filtersAndSorters, setFiltersAndSorters] = useRecoilState(filtersAndSortersState);

    const handleChange = (event) => {
      let newArray = filtersAndSorters.filter.map( category => {
        if(category.categoryId === parseInt(event.target.name)){
          return {...category, selected: event.target.checked}
        }
        return category;
      });
      setFiltersAndSorters({...filtersAndSorters, filter: newArray});
      
    };

    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };

  return (
    <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
        >
        <MenuItem key="categoryFilter" disableRipple>
            <Box>
                <FormControl component="fieldset" variant="standard">
                <FormLabel component="legend">Categoria</FormLabel>
                <FormGroup>
                    {
                    filtersAndSorters.filter.map((category, index) => {
                        return (
                        <FormControlLabel 
                            key={index}
                            control={
                            <Switch checked={category.selected} onChange={handleChange} name={''+category.categoryId??''} />
                            }
                            label={category.description??''}
                        />
                        );
                    })
                    }
                </FormGroup>
                </FormControl>
            </Box>
            </MenuItem>
        </Menu>
  )
}

export default FilterMenu;