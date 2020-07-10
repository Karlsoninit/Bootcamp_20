import types from "../types";

import { createAction } from "@reduxjs/toolkit";

// redux actions

// export const setDependence = (environment) => ({
//   type: types.SET_DEPENDENCE,
//   payload: { environment },
// });

// export const setProductName = (name) => ({
//   type: types.SET_PRODUCT_NAME,
//   payload: { name },
// });

// export const setProductOwner = (owner) => ({
//   type: types.SET_PRODUCT_OWNER,
//   payload: { owner },
// });

// export const setDomain = (domain) => ({
//   type: types.SET_DOMAIN,
//   payload: { domain },
// });

// toolkit actions

//  export const setDependence = createAction('SET_DEPENDENCE')
//  export const setProductName = createAction('SET_PRODUCT_NAME')
//  export const setProductOwner = createAction('SET_PRODUCT_OWNER')
//  export const setDomain = createAction('SET_DOMAIN')

const setDependence = createAction("SET_DEPENDENCE");
const setProductName = createAction("SET_PRODUCT_NAME");
const setProductOwner = createAction("SET_PRODUCT_OWNER");
const setDomain = createAction("SET_DOMAIN");

export default { setDependence, setProductName, setProductOwner, setDomain };
