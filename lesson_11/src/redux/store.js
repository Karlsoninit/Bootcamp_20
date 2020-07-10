import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { configReducer } from "./config/configReducer";
import { sessionReducer } from "./session/sessionReducer";


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['session', 'config']
}

const rootReducer = combineReducers({
  config: configReducer,
  session: sessionReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


persistStore(store)