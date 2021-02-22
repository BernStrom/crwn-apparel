import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import rootReducer from './rootReducer';

export const store = configureStore({
  reducer: rootReducer,
  middleware: [logger],
});

export const persistor = persistStore(store);
