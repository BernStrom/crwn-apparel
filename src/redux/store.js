import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import rootReducer from './rootReducer';

const middlewares = [];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export const store = configureStore({
  reducer: rootReducer,
  middleware: middlewares,
});

export const persistor = persistStore(store);
