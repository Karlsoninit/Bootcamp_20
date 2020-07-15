import db from "../../db/config";
import wishesReducer from "./wishesReducer";

const { actions } = wishesReducer;
const {
  createWish,
  userCollectionId,
  updateAllWishesCollection,
  uploadFriendsWishes,
} = actions;

export const createListWishes = (wish) => async (dispatch, getState) => {
  const { uid, nickName } = getState().session.user;
  const { collectionId } = getState().wishes;
  try {
    let addWish;
    if (!collectionId) {
      addWish = await db.firestore.collection("birthdayWishes").add({
        uid,
        nickName,
      });
    } else {
      addWish = await db.firestore
        .collection("birthdayWishes")
        .doc(collectionId);
    }

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

export const checkUserCollectionId = () => async (dispatch, getState) => {
  try {
    const { uid } = getState().session.user;
    const collection = await db.firestore.collection("birthdayWishes");
    const userCollectionData = await collection.where("uid", "==", uid).get();

    userCollectionData.docs.forEach((elem) => {
      console.log(elem.data());
      console.log("id", elem.id);
      dispatch(userCollectionId(elem.id));
    });
  } catch (e) {
    console.log(e);
  }
};

export const getAllUsersWisheCollection = () => async (dispatch, getState) => {
  try {
    const userCollections = await db.firestore
      .collection("birthdayWishes")
      .get();
    const data = userCollections.docs.map((doc) => ({
      ...doc.data(),
      collectionId: doc.id,
    }));
    console.log("data", data);
    dispatch(updateAllWishesCollection(data));
  } catch (e) {
    console.log(e);
  }
};

export const getFriendWishes = (name, docId) => async (dispatch, getState) => {
  try {
    const friendsWishes = await db.firestore
      .collection("birthdayWishes")
      .doc(docId)
      .collection("wishes")
      .get();

    const data = friendsWishes.docs.map((doc) => doc.data());
    console.log("data", data);
    dispatch(uploadFriendsWishes({ name: name, list: data }));
  } catch (e) {
    console.log(e);
  }
};
