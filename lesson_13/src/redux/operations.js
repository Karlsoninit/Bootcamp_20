import axios from "axios";
import { editingProfile, startFetch, fetchSuccess } from "./actions";

export const uploadUserProfile = () => async (dispatch, getState) => {
  try {
    dispatch(startFetch());
    const { data } = await axios.get(
      "https://news-9cced.firebaseio.com/user.json"
    );

    const transformRespone = Object.keys(data).map((key) => ({
      ...data[key],
      id: key,
    }));

    dispatch(editingProfile(...transformRespone));
  } catch (er) {
    console.log(er);
  } finally {
    dispatch(fetchSuccess());
  }
};

export const updateProfile = (user) => async (dispatch, getState) => {
  console.log("getState", getState());
  console.log("user update", user);
  const { id } = getState().session.user;
  console.log(id);
  try {
    const { data } = await axios.put(
      `https://news-9cced.firebaseio.com/user/${id}.json`,
      user
    );
    console.log("data", data);
    dispatch(editingProfile(data));
  } catch (er) {
    console.log(er);
  } finally {
    dispatch(fetchSuccess());
  }
};
