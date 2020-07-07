import { createStore, combineReducers } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import { user } from "./reducers";

const rootReducer = combineReducers({
  user,
});

export const store = createStore(rootReducer, devToolsEnhancer());
