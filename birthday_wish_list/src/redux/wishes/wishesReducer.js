import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "",
  data: [],
  wishCount: 0,
};

export default createSlice({
  name: "wishes",
  initialState,
  reducers: {
    createWish: (state) => ({
      ...state,
      wishCount: state.wishCount + 1,
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
