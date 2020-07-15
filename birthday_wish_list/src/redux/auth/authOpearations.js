import db from "../../db/config";
import authReducer from "./authReducer";
console.log("authReducer", authReducer);

const { actions } = authReducer;
const { updateUserProfile, signOut } = actions;

export const userSignIn = ({ email, password, nickName }) => async (
  dispatch,
  getState
) => {
  try {
    await db.auth.createUserWithEmailAndPassword(email, password);
    const user = await db.auth.currentUser;
    await user.updateProfile({
      displayName: nickName,
    });
    const currentUser = await db.auth.currentUser;
    dispatch(updateUserProfile(currentUser));
  } catch (e) {
    console.log(e);
  }
};

// export const AuthStateChanged = () => async (dispatch, getState) => {
//   try {
//     await db.auth.onAuthStateChanged((user) => {
//       console.log("stateChanged", user);
//       if (user) {
//         dispatch(updateUserProfile(user));
//       } else {
//         dispatch(
//           updateUserProfile({
//             email: null,
//             nickName: null,
//             uid: null,
//           })
//         );
//       }
//     });
//   } catch (e) {
//     console.log(e);
//   }
// };

export const userSignOut = () => async (dispatch) => {
  try {
    await db.auth.signOut();
    dispatch(signOut());
  } catch (e) {
    console.log(e);
  }
};
