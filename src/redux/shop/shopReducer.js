import { createReducer } from '@reduxjs/toolkit';
import SHOP_DATA from './shopData';

const initialState = {
  collections: SHOP_DATA,
};

const shopReducer = createReducer(initialState, (builder) => {
  builder.addDefaultCase((state, action) => {
    return state;
  });
});

export default shopReducer;
