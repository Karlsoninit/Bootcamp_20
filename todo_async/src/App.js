import React, { Component } from "react";

import BasicTextFields from "./ui/basicTextFields/BasicTextFields";

import { receivingData, deleteTask } from "./services/services";

import Loader from "./ui/loader/Loader";
import Todos from "./components/todos/Todos";

class App extends Component {
  state = {
    todos: [],
    loading: true,
  };

  componentDidMount() {
    this.fetchedTodos();
  }

  // updateTodos = (todos) => {
  //   this.setState({ todos });
  // };
  updateTodos = (task) => {
    this.setState((prev) => ({ todos: [...prev.todos, task] }));
  };

  deleteTask = async (id) => {
    try {
      await deleteTask(id);
      this.setState((prev) => ({
        todos: prev.todos.filter((task) => task.id !== id),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  fetchedTodos = async () => {
    try {
      const todos = await receivingData();
      this.setState({ todos });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { loading, todos } = this.state;
    return (
      <>
        <BasicTextFields updateTodos={this.updateTodos} />
        {loading ? (
          <Loader />
        ) : (
          <Todos deleteTask={this.deleteTask} todos={todos} />
        )}
      </>
    );
  }
}

export default App;
