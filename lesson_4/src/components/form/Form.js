import React, { Component } from "react";
import shortID from "shortid";
import Input from "../input/Input";
import config from "../../inputConfig";
import CustomSelect from "../customSelect/CustomSelect";
console.log("config", config);

// console.log(Object.keys(config).map((name) => ({ [name]: "" })));

const initialState = {
  [config.wish.name]: "",
  [config.description.name]: "",
  priority: null,
};

class Form extends Component {
  state = initialState;

  handleSubmit = (event) => {
    event.preventDefault();
    const wish = {
      ...this.state,
      date: new Date().toDateString(),
      id: shortID(),
    };
    if (this.state.wish.trim()) {
      this.props.getWishes(wish);
    }
    this.setState(initialState);
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  choosePriority = ({ value }) => {
    this.setState({ priority: value });
  };

  render() {
    console.log("re-render");

    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          {...config.wish}
          onChange={this.handleChange}
          value={this.state.wish}
        />
        <Input
          {...config.description}
          onChange={this.handleChange}
          value={this.state.description}
        />

        <CustomSelect onHandleChoosePriority={this.choosePriority} />
        <button type="submit">add</button>
      </form>
    );
  }
}

export default Form;

//before liba

// 41.2 KB  build/static/js/2.24755919.chunk.js
// 1.41 KB  build/static/js/main.4876c892.chunk.js
// 770 B    build/static/js/runtime-main.6d2ff0e1.js
