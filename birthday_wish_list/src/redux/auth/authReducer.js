import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    email: null,
    nickName: null,
    uid: null,
  },
  isLogin: false,
};

export default createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateUserProfile: (state, { payload }) => ({
      ...state,
      user: {
        email: payload.email,
        uid: payload.uid,
        nickName: payload.displayName,
      },
    }),
    loginSuccessful: (state, { payload }) => ({
      ...state,
      user: {
        email: payload.email,
        uid: payload.uid,
        nickName: payload.displayName,
      },
      isLogin: true,
    }),
    signOut: () => initialState,
  },
});
