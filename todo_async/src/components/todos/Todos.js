import React from "react";
import SimpleCard from "../../ui/simpleCard/SimpleCard";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styles from "./todo.module.css";

const moveAnimate = {
  enter: styles.moveEnter,
  enterActive: styles.moveEnterActive,
  exit: styles.moveExit,
  exitActive: styles.moveExitActive,
  enterDone: styles.moveEnterDone,
};

const Todos = ({ todos, deleteTask }) => {
  return (
    <TransitionGroup
      component="ul"
      style={{ display: "flex", flexWrap: "wrap" }}
    >
      {todos.map((task) => (
        <CSSTransition key={task.id} timeout={2000} classNames={moveAnimate}>
          <li>
            <SimpleCard deleteTask={deleteTask} {...task} />
          </li>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default Todos;
