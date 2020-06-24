import React, { Component } from "react";

import TextField from "@material-ui/core/TextField";
import FireButton from "../fireButton/FireButton";

import { sendNewTask, receivingData } from "../../services/services";

export default class BasicTextFields extends Component {
  state = {
    task: "",
  };

  // handleSubmit = async (evt) => {
  //   evt.preventDefault();
  //   console.log("this.state", this.state);
  //   if (this.state.task.trim()) {
  //     await sendNewTask({
  //       ...this.state,
  //       timeStamp: new Date().toDateString(),
  //     });
  //     const allTodos = await receivingData();

  //     this.props.updateTodos(allTodos);
  //   }
  //   this.setState({ task: "" });
  // };
  // handleChange = ({ target: { name, value } }) => {
  //   this.setState({ [name]: value });
  // };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    console.log("this.state", this.state);
    if (this.state.task.trim()) {
      const response = await sendNewTask({
        ...this.state,
        timeStamp: new Date().toDateString(),
      });
      if (response.statusText === "OK") {
        const id = response.data.name;
        this.props.updateTodos({
          ...this.state,
          timeStamp: new Date().toDateString(),
          id,
        });
      }
      console.log("response", response);
    }
    this.setState({ task: "" });
  };
  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    const { task } = this.state;
    return (
      <form
        style={{ display: "flex" }}
        noValidate
        autoComplete="off"
        onSubmit={this.handleSubmit}
      >
        <TextField
          style={{ width: 400 }}
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          name="task"
          value={task}
          onChange={this.handleChange}
        />
        <FireButton type="submit" title="SEND" />
      </form>
    );
  }
}
