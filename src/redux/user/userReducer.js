import { createAction, createReducer } from '@reduxjs/toolkit';
import { UserActionTypes } from './userTypes';

const setCurrentUser = createAction(UserActionTypes.SET_CURRENT_USER);

const initialState = {
  currentUser: null,
};

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCurrentUser, (state, action) => {
      state.currentUser = action.payload;
    })
    .addDefaultCase((state, action) => {
      return state;
    });
});

export default userReducer;
