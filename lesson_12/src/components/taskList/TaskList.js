import React from "react";
import { connect } from "react-redux";
import TaskListItem from "../taskListItem/TaskListItem";

const TaskList = ({ tasks }) => {
  return tasks.map((task) => <TaskListItem key={task.id} {...task} />);
};

const mapStateToProps = (state) => ({
  tasks: state.session.tasks,
});

export default connect(mapStateToProps)(TaskList);
