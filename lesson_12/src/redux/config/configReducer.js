import types from "../types";

import { createReducer, createSlice } from "@reduxjs/toolkit";
// import {setDependence,
//   setProductName,
//   setProductOwner,
//   setDomain} from './configActions'

import configAction from "./configActions";
console.log("configAction.sedDependence", configAction.setDependence);

// const initialState = {
//   nodeEnv: null,
//   productName: null,
//   productOwner: null,
//   authDomain: null,
// };

// export const configReducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case types.SET_DEPENDENCE:
//       return { ...state, nodeEnv: payload.environment };
//     case types.SET_PRODUCT_NAME:
//       return { ...state, productName: payload.name };
//     case types.SET_PRODUCT_OWNER:
//       return { ...state, productOwner: payload.owner };
//     case types.SET_DOMAIN:
//       return { ...state, authDomain: payload.domain };
//     default:
//       return state;
//   }
// };

// redux

// const handlers = {
//   [types.SET_DEPENDENCE]: (state, { payload }) => ({
//     ...state,
//     nodeEnv: payload.environment,
//   }),
//   [types.SET_PRODUCT_NAME]: (state, { payload }) => ({
//     ...state,
//     productName: payload.name,
//   }),
//   [types.SET_PRODUCT_OWNER]: (state, { payload }) => ({
//     ...state,
//     productOwner: payload.owner,
//   }),
//   [types.SET_DOMAIN]: (state, { payload }) => ({
//     ...state,
//     authDomain: payload.domain,
//   }),

//   DEFAULT: (state) => state,
// };

// export const configReducer = (state = initialState, action) => {
//   const handler = handlers[action.type] || handlers.DEFAULT;
//   return handler(state, action);
// };

///redux toolkit

// const setDependenceReduce = (state, { payload }) => ({
//   ...state,
//   nodeEnv: payload,
// });

// export const configReducer = createReducer(initialState, {
//   [configAction.setDependence]: setDependenceReduce,
//   [configAction.setProductName]: (state, { payload }) => ({
//     ...state,
//     productName: payload,
//   }),
//   [configAction.setProductOwner]: (state, { payload }) => ({
//     ...state,
//     productOwner: payload,
//   }),
//   [configAction.setDomain]: (state, { payload }) => ({
//     ...state,
//     authDomain: payload,
//   }),
// });

const initialState = {
  nodeEnv: null,
  productName: null,
  productOwner: null,
  authDomain: null,
};

export const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    setDependence: (state, { payload }) => ({
      ...state,
      nodeEnv: payload,
    }),
    setProductName: (state, { payload }) => ({
      ...state,
      productName: payload,
    }),
    setProductOwner: (state, { payload }) => ({
      ...state,
      productOwner: payload,
    }),
    setDomain: (state, { payload }) => ({
      ...state,
      authDomain: payload,
    }),
  },
});
