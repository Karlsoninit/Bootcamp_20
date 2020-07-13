import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authReducer";

console.log("authReducer", authReducer);

export default configureStore({
  reducer: { session: authReducer.reducer },
});
