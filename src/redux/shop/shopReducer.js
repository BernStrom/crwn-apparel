import { createReducer, createAction } from '@reduxjs/toolkit';
import ShopActionTypes from './shopTypes';

const fetchCollectionsStart = createAction(ShopActionTypes.FETCH_COLLECTIONS_START);
const fetchCollectionsSuccess = createAction(ShopActionTypes.FETCH_COLLECTIONS_SUCCESS);
const fetchCollectionsFailure = createAction(ShopActionTypes.FETCH_COLLECTIONS_FAILURE);

const initialState = {
  collections: null,
  isFetching: false,
  errorMessage: undefined,
};

const shopReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchCollectionsStart, (state, action) => {
      state.isFetching = true;
    })
    .addCase(fetchCollectionsSuccess, (state, action) => {
      state.isFetching = false;
      state.collections = action.payload;
    })
    .addCase(fetchCollectionsFailure, (state, action) => {
      state.isFetching = false;
      state.errorMessage = action.payload;
    })
    .addDefaultCase((state, action) => {
      return state;
    });
});

export default shopReducer;
