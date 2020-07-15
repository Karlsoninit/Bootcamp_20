import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  collectionId: null,
  data: [],
  wishCount: 0,
  friendsWish: {
    name: "",
    list: [],
  },
};

export default createSlice({
  name: "wishes",
  initialState,
  reducers: {
    createWish: (state) => ({
      ...state,
      wishCount: state.wishCount + 1,
    }),
    userCollectionId: (state, { payload }) => ({
      ...state,
      collectionId: payload,
    }),
    updateAllWishesCollection: (state, { payload }) => ({
      ...state,
      data: payload,
    }),
    uploadFriendsWishes: (state, { payload }) => ({
      ...state,
      friendsWish: {
        name: payload.name,
        list: payload.list,
      },
    }),
  },
});

// status(pin):"SUCCESS"
// nextStatus(pin):"INITIAL"
// hasNext(pin):false
// readingTime(pin):0
// lastMeasured(pin):0
// cardWidth(pin):186
// isSecondRow(pin):false
// isVerticalView(pin):false
