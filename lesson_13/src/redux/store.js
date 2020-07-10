import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
// import thunk from "redux-thunk";
import { session } from "./reducers";
import { logger } from "../middlawers/logger";

const middlawers = [logger];

const rootReducer = combineReducers({
  session,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlawers))
);
