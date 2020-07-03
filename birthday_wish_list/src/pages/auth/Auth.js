import React, { Suspense, Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import authConfig from "../../components/auth/authConfig";
import Navigation from "../../components/auth/navigation/Navigation";

const initialState = {
  email: "",
  nickName: "",
  password: "",
};

class Auth extends Component {
  state = initialState;

  handleSubmitForm = (evt) => {
    evt.preventDefault();
    console.log(this.state);
  };
  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    const { email, password, nickName } = this.state;
    const {
      match: { path },
    } = this.props;

    return (
      <Suspense fallback={<h2>Loading ...</h2>}>
        <Navigation parentPath={path} />

        <img
          style={{ width: 600 }}
          src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ffarm9.staticflickr.com%2F8390%2F8595128020_ac2a585f5a.jpg&f=1&nofb=1"
          alt="choose"
        />
        <Switch>
          {authConfig.map((route) => {
            return (
              <Route key={route.path} path={`${path}${route.path}`}>
                <route.component
                  handleSubmitForm={this.handleSubmitForm}
                  handleChange={this.handleChange}
                  value={this.state}
                />
              </Route>
            );
          })}
        </Switch>
      </Suspense>
    );
  }
}

export default withRouter(Auth);
