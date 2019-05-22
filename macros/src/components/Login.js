import React from "react";
import { connect } from "react-redux";
import {
  Container,
  Title,
  FormContainer,
  Form,
  Input,
  Button
} from "../styles";
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
      <FormContainer>
        <Title>Login Below</Title>
        {this.props.error && <p>{this.props.error}</p>}
        <Form onSubmit={this.handleSubmit}>
          <Input
            value={this.state.credentials.username}
            name="username"
            onChange={this.handleChange}
            type="text"
            placeholder="Username"
          />
          <Input
            value={this.state.credentials.password}
            name="password"
            onChange={this.handleChange}
            type="password"
            placeholder="Password"
          />
          <Button>Login</Button>
        </Form>
      </FormContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggingIn: state.isLoggingIn,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { login }
)(Login);
