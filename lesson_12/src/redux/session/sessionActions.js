import types from "../types";

export const uploadTasks = (tasks) => ({
  type: types.UPLOAD_TASKS,
  payload: { tasks },
});

export const performedTask = (id) => ({
  type: types.PERFORMED_TASK,
  payload: { id },
});
