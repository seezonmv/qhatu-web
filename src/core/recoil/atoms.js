import {atom} from 'recoil';

export const filtersAndSortersState = atom({
    key: 'filtersAndSorters',
    default: {filter:[], sorter: 0}
})
