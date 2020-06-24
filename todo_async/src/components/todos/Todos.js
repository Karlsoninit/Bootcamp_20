import React from "react";
import SimpleCard from "../../ui/simpleCard/SimpleCard";

const Todos = ({ todos, deleteTask }) => {
  return (
    <ul style={{ display: "flex", flexWrap: "wrap" }}>
      {todos.map((task) => (
        <li key={task.id}>
          <SimpleCard deleteTask={deleteTask} {...task} />
        </li>
      ))}
    </ul>
  );
};

export default Todos;
