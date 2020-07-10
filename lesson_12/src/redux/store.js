// redux
// import { createStore, combineReducers } from "redux";

// redux toolkit

import { configureStore } from "@reduxjs/toolkit";

// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'

import { configReducer, configSlice } from "./config/configReducer";
// import { sessionReducer } from "./session/sessionReducer";

// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: ['session', 'config']
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer)

// redux
// export const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// redux toolkit

export const store = configureStore({
  reducer: {
    [configSlice.name]: configSlice.reducer,
  },
});

// session: sessionReducer,
