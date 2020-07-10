import types from "../types";

const initialState = {
  user: { id: "0dsidfdkds" },
  tasks: [],
};

const handlers = {
  [types.UPLOAD_TASKS]: (state, { payload }) => ({
    ...state,
    tasks: payload.tasks,
  }),
  [types.PERFORMED_TASK]: (state, { payload }) => ({
    ...state,
    tasks: state.tasks.filter((task) => task.id !== payload.id),
  }),

  DEFAULT: (state) => state,
};

export const sessionReducer = (state = initialState, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
};
