import React from "react";
import { connect } from "react-redux";

import { login } from "../actions";

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      credentials: {
        username: "",
        password: ""
      }
    };
  }

  handleChange = event => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [event.target.name]: event.target.value
      }
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.login(this.state.credentials).then(() => {
      this.props.history.push("/");
    });
  };

  render() {
    return (
      <div>
        <h1>Login Below</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.credentials.username}
            name="username"
            onChange={this.handleChange}
            type="text"
            placeholder="Username"
          />
          <input
            value={this.state.credentials.password}
            name="password"
            onChange={this.handleChange}
            type="password"
            placeholder="Password"
          />
          <button>Login</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggingIn: state.isLoggingIn
  };
};

export default connect(
  mapStateToProps,
  { login }
)(Login);
