import React, { Component } from "react";

import TextField from "@material-ui/core/TextField";
import FireButton from "../fireButton/FireButton";

import { sendNewTask } from "../../services/services";

import { BaseContext } from "../../context/base/BaseContext";
import { ApplicationContext } from "../../context/application/ApplicationContext";

export default class BasicTextFields extends Component {
  static contextType = BaseContext;
  state = {
    task: "",
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    if (!this.context.subscription) {
      console.log("sorry you need pay !!!");
      return;
    }
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
    }
    this.setState({ task: "" });
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    const { task } = this.state;
    console.log("this.context", this.context);
    return (
      <form
        style={{ display: "flex" }}
        noValidate
        autoComplete="off"
        onSubmit={this.handleSubmit}
      >
        <ApplicationContext.Consumer>
          {(context) => {
            console.log("context", context);
            return (
              <TextField
                style={{ width: 400 }}
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                name="task"
                value={task}
                onChange={this.handleChange}
              />
            );
          }}
        </ApplicationContext.Consumer>

        <FireButton type="submit" title="SEND" />
      </form>
    );
  }
}
