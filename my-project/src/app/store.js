// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counterSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { combineReducers } from 'redux';

// Configuration for Redux Persist
const persistConfig = {
  key: 'root',      // key is the identifier for storage
  storage,          // defines the storage type
};

const rootReducer = combineReducers({
  counter: counterReducer,
});

// Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
