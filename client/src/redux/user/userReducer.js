import { createAction, createReducer } from '@reduxjs/toolkit';
import UserActionTypes from './userTypes';

const signInSuccess = createAction(UserActionTypes.SIGN_IN_SUCCESS);
const signInFailure = createAction(UserActionTypes.SIGN_IN_FAILURE);
const signOutSuccess = createAction(UserActionTypes.SIGN_OUT_SUCCESS);
const signOutFailure = createAction(UserActionTypes.SIGN_OUT_FAILURE);
const signUpFailure = createAction(UserActionTypes.SIGN_UP_FAILURE);

const initialState = {
  currentUser: null,
  error: null,
};

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(signInSuccess, (state, action) => {
      state.currentUser = action.payload;
      state.error = null;
    })
    .addCase(signOutSuccess, (state, action) => {
      state.currentUser = null;
      state.error = null;
    })
    .addCase(signInFailure, (state, action) => {
      state.error = action.payload;
    })
    .addCase(signOutFailure, (state, action) => {
      state.error = action.payload;
    })
    .addCase(signUpFailure, (state, action) => {
      state.error = action.payload;
    })
    .addDefaultCase((state, action) => {
      return state;
    });
});

export default userReducer;
