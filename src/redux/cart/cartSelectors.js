import { createSelector } from '@reduxjs/toolkit';

const selectCart = (state) => state.cart;

export const selectCartHidden = createSelector([selectCart], (cart) => cart.hidden);
export const selectCartItems = createSelector([selectCart], (cart) => cart.cartItems);
export const selectCartItemsCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)
);