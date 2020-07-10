import React from "react";
import { connect } from "react-redux";
import {
  setDependence,
  setProductName,
  setProductOwner,
  setDomain,
} from "./redux/config/configActions";
import { uploadTasks } from "./redux/session/sessionActions";
import TaskList from "./components/taskList/TaskList";

const name = "redux";
const owner = "Bootcamp_20";

const data = [
  {
    task: "Redux",
    dateFinish: "13.07.2020",
    mentor: "Bond",
    id: "09f8ruyg5htrkfiv",
  },
  {
    task: "redux toolkit",
    dateFinish: "20.07.2020",
    mentor: "Bond",
    id: "09v8ufjremdckvjds",
  },
  {
    task: "redux thunk",
    dateFinish: "17.07.2020",
    mentor: "Bond",
    id: "8765rfwevdbcs",
  },
  {
    task: "hooks",
    dateFinish: "20.07.2020",
    mentor: "Bond",
    id: "d9876wtrfsndsd",
  },
  {
    task: "async redux",
    dateFinish: "13.07.2020",
    mentor: "Bond",
    id: "der9ujednsds",
  },
];

class App extends React.Component {
  state = {};
  componentDidMount() {
    //имитация  запроса на db
    const environment = process.env.NODE_ENV;
    const location = window.location.href;
    console.log("location", location);
    this.props.setDependence(environment);
    this.props.setProductName(name);
    this.props.setProductOwner(owner);
    this.props.setDomain(location);
    this.props.uploadTasks(data);
  }
  render() {
    return (
      <>
        <TaskList />
      </>
    );
  }
}

const mapDispatchToProps = {
  setDependence,
  setProductName,
  setProductOwner,
  setDomain,
  uploadTasks,
};

export default connect(null, mapDispatchToProps)(App);
