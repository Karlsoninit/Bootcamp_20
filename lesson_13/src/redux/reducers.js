export const EDITING_PROFILE = "user/EDITING_PROFILE";
export const START_FETCH_DB = "user/START_FETCH_DB";
export const FETCH_SUCCESS = "session/FETCH_SUCCESS";

const initialState = {
  user: {
    name: "",
    age: null,
    birthday: "",
    nickName: "",
  },
  loading: true,
};

export const session = (state = initialState, action) => {
  switch (action.type) {
    case EDITING_PROFILE:
      return { ...state, user: action.payload };
    case START_FETCH_DB:
      return state;
    case FETCH_SUCCESS:
      return { ...state, loading: false };
    default:
      return state;
  }
};
