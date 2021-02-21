import { createAction, createReducer } from '@reduxjs/toolkit';
import { CartActionTypes } from './cartTypes';
import { addItemToCart } from './cart.utils';

const toggleCartHidden = createAction(CartActionTypes.TOGGLE_CART_HIDDEN);
const addItem = createAction(CartActionTypes.ADD_ITEM);

const initialState = {
  hidden: true,
  cartItems: [],
};

const cartReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(toggleCartHidden, (state, action) => {
      state.hidden = !state.hidden;
    })
    .addCase(addItem, (state, action) => {
      state.cartItems = addItemToCart(state.cartItems, action.payload);
    })
    .addDefaultCase((state, action) => {
      return state;
    });
});

export default cartReducer;
