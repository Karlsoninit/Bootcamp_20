import types from "../types";

export const setDependence = (environment) => ({
  type: types.SET_DEPENDENCE,
  payload: { environment },
});

export const setProductName = (name) => ({
  type: types.SET_PRODUCT_NAME,
  payload: { name },
});

export const setProductOwner = (owner) => ({
  type: types.SET_PRODUCT_OWNER,
  payload: { owner },
});

export const setDomain = (domain) => ({
  type: types.SET_DOMAIN,
  payload: { domain },
});
