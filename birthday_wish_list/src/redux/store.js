import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authReducer";
import wishesReducer from "./wishes/wishesReducer";

console.log("authReducer", authReducer);

export default configureStore({
  reducer: { session: authReducer.reducer, wishes: wishesReducer.reducer },
});
