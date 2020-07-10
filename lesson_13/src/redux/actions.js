import { EDITING_PROFILE, START_FETCH_DB, FETCH_SUCCESS } from "./reducers";

export const editingProfile = (data) => ({
  type: EDITING_PROFILE,
  payload: data,
});

export const startFetch = () => ({
  type: START_FETCH_DB,
});
export const fetchSuccess = () => ({
  type: FETCH_SUCCESS,
});
