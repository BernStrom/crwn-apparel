import { createReducer } from '@reduxjs/toolkit';
import DIRECTORY_DATA from './directoryData';

const initialState = {
  sections: DIRECTORY_DATA,
};

const directoryReducer = createReducer(initialState, (builder) => {
  builder.addDefaultCase((state, action) => {
    return state;
  });
});

export default directoryReducer;
