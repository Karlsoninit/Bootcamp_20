import db from "../../db/config";
import wishesReducer from "./wishesReducer";

const { actions } = wishesReducer;
const { createWish } = actions;

export const createListWishes = (wish) => async (dispatch, getState) => {
  const { uid, nickName } = getState().session.user;
  try {
    const addWish = await db.firestore.collection("birthdayWishes").add({
      uid,
      nickName,
    });
    console.log("addWish", addWish.id);

    const putNewWish = await db.firestore
      .collection("birthdayWishes")
      .doc(addWish.id)
      .collection("wishes")
      .add({
        wish,
      });

    console.log(putNewWish);

    dispatch(createWish());
  } catch (e) {
    console.log(e);
  }
};
