import { createReducer, createAction } from '@reduxjs/toolkit';
import ShopActionTypes from './shopTypes';

const updateCollections = createAction(ShopActionTypes.UPDATE_COLLECTIONS);

const initialState = {
  collections: null,
};

const shopReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(updateCollections, (state, action) => {
      state.collections = action.payload;
    })
    .addDefaultCase((state, action) => {
      return state;
    });
});

export default shopReducer;
