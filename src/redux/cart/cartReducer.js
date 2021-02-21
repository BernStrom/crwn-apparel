import { createAction, createReducer } from '@reduxjs/toolkit';
import { CartActionTypes } from './cartTypes';

const toggleCartHidden = createAction(CartActionTypes.TOGGLE_CART_HIDDEN);

const initialState = {
  hidden: true,
};

const cartReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(toggleCartHidden, (state, action) => {
      state.hidden = !state.hidden;
    })
    .addDefaultCase((state, action) => {
      return state;
    });
});

export default cartReducer;
