// ** Redux Imports
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import auth from './app/auth'

// ** Middleware Imports
import { middleware } from './middleware'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const reducer = combineReducers({ auth })

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(middleware),
})

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
