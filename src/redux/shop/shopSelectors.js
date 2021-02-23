import { createSelector } from '@reduxjs/toolkit';

const selectShop = (state) => state.shop;

export const selectCollections = createSelector([selectShop], (shop) => shop.collections);
