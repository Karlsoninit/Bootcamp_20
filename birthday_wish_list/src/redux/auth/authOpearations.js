import db from "../../db/config";
import authReducer from "./authReducer";
console.log("authReducer", authReducer);

const { actions } = authReducer;
const { updateUserProfile } = actions;

export const userSignIn = ({ email, password, nickName }) => async (
  dispatch,
  getState
) => {
  const user = await db.auth.createUserWithEmailAndPassword(email, password);
  console.log("user", user);
  try {
  } catch (e) {
    console.log(e);
  }
};

export const AuthStateChanged = () => async (dispatch, getState) => {
  try {
    await db.auth.onAuthStateChanged((user) => {
      console.log("user chack", user);
      if (user) {
        dispatch(updateUserProfile(user));
      } else {
        dispatch(
          updateUserProfile({
            email: null,
            nickName: null,
            uid: null,
          })
        );
      }
    });
  } catch (e) {
    console.log(e);
  }
};

export const userSignOut = () => async () => {
  try {
    await db.auth.signOut();
  } catch (e) {
    console.log(e);
  }
};
