import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './user/userReducer';

export default combineReducers({
  user: userReducer,
});
