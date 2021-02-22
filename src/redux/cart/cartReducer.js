import { createAction, createReducer } from '@reduxjs/toolkit';
import { CartActionTypes } from './cartTypes';
import { addItemToCart, removeItemFromCart } from './cart.utils';

const toggleCartHidden = createAction(CartActionTypes.TOGGLE_CART_HIDDEN);
const addItem = createAction(CartActionTypes.ADD_ITEM);
const removeItem = createAction(CartActionTypes.REMOVE_ITEM);
const clearItemFromCart = createAction(CartActionTypes.CLEAR_ITEM_FROM_CART);

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
    .addCase(removeItem, (state, action) => {
      state.cartItems = removeItemFromCart(state.cartItems, action.payload);
    })
    .addCase(clearItemFromCart, (state, action) => {
      state.cartItems = state.cartItems.filter((cartItem) => cartItem.id !== action.payload.id);
    })
    .addDefaultCase((state, action) => {
      return state;
    });
});

export default cartReducer;
