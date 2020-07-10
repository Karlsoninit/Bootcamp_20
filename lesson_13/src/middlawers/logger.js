export const logger = ({ dispatch, getState }) => (next) => (action) => {
  console.log("action", action);
  if (typeof action === "function") {
    action(dispatch, getState);
  } else {
    next(action);
  }
};
