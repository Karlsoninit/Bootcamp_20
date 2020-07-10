import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { performedTask } from "../../redux/session/sessionActions";

const TaskListItem = ({ task, id }) => {
  const dispatch = useDispatch();
  const remove = () => dispatch(performedTask(id));
  const { tasks } = useSelector((state) => state.session);
  console.log("session", tasks);

  return (
    <div>
      <h2>{task}</h2>
      <button onClick={remove}>performed</button>
    </div>
  );
};

export default TaskListItem;
