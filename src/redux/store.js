import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import rootReducer from './rootReducer';

let loggerMiddleware = null;

if (process.env.NODE_ENV === 'development') {
  loggerMiddleware = logger;
}

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(loggerMiddleware),
});

export const persistor = persistStore(store);
