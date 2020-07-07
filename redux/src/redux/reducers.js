const EDITING_PROFILE = "user/EDITING_PROFILE";

const initialState = {
  name: "Maksim",
  age: 18,
  birthday: "31.12.1991",
  nickName: "Karlson",
};

export const editingProfile = (data) => ({
  type: EDITING_PROFILE,
  payload: data,
});

export const user = (state = initialState, action) => {
  switch (action.type) {
    case EDITING_PROFILE:
      return action.payload;
    default:
      return state;
  }
};
