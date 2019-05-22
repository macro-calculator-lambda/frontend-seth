import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { signup } from "../actions";
import {
  Container,
  FormContainer,
  Form,
  Input,
  Select,
  Option
} from "../styles";

class Register extends React.Component {
  constructor() {
    super();

    this.state = {
      userInfo: {
        username: "",
        password: "",
        gender: "",
        age: "",
        height: "",
        weight: "",
        exercise: "",
        goal: ""
      }
    };
  }

  handleChange = event => {
    let value = event.target.value;
    if (event.target.name === "age" || event.target.name === "weight") {
      value = parseInt(value, 10);
    }
    this.setState({
      userInfo: {
        ...this.state.userInfo,
        [event.target.name]: value
      }
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.signup(this.state.userInfo).then(() => {
      this.props.history.push("/login");
    });
  };

  render() {
    return (
      <Container>
        <FormContainer>
          <h1>Sign Up Below</h1>
          <Form onSubmit={this.handleSubmit}>
            <Input
              onChange={this.handleChange}
              value={this.state.userInfo.username}
              type="text"
              name="username"
              placeholder="Username"
            />

            <Input
              onChange={this.handleChange}
              value={this.state.userInfo.password}
              type="password"
              name="password"
              placeholder="Password"
            />

            <div>
              <label htmlFor="gender">Gender: </label>
              <Select
                onChange={this.handleChange}
                value={this.state.userInfo.gender}
                name="gender"
                id="gender"
              >
                <Option value="">Select Gender</Option>
                <Option value="male">Male</Option>
                <Option value="female">Female</Option>
              </Select>
            </div>

            <Input
              onChange={this.handleChange}
              value={this.state.userInfo.age}
              type="number"
              name="age"
              placeholder="Age"
            />

            <div>
              <label htmlFor="user-height">Select your Height:</label>
              <Select
                onChange={this.handleChange}
                name="height"
                id="user-height"
                value={this.state.userInfo.height}
              >
                <Option value="">Select Height</Option>
                <Option value="63">5' 3"</Option>
                <Option value="64">5' 4"</Option>
                <Option value="65">5' 5"</Option>
                <Option value="66">5' 6"</Option>
                <Option value="67">5' 7"</Option>
                <Option value="68">5' 8"</Option>
                <Option value="69">5' 9"</Option>
                <Option value="70">5' 10"</Option>
                <Option value="71">5' 11"</Option>
                <Option value="72">6'</Option>
              </Select>
            </div>

            <Input
              onChange={this.handleChange}
              value={this.state.userInfo.weight}
              type="number"
              name="weight"
              placeholder="Weight in pounds"
            />

            <div>
              <label htmlFor="exercise-total">Exercise per week:</label>
              <Select
                onChange={this.handleChange}
                value={this.state.userInfo.exercise}
                name="exercise"
                id="exercise-total"
              >
                <Option value="">Select Exercise Days</Option>
                <Option value="0">0 days</Option>
                <Option value="1">1-2 days</Option>
                <Option value="3">3-4 days</Option>
                <Option value="5">5-6 days</Option>
                <Option value="7">7 days</Option>
              </Select>
            </div>
            <div>
              <label htmlFor="goal">Select your Goal:</label>
              <Select
                onChange={this.handleChange}
                value={this.state.userInfo.goal}
                name="goal"
                id="goal"
              >
                <Option value="">Select Goal</Option>
                <Option value="aggressive-loss">
                  Agressive Weight Loss (20%)
                </Option>
                <Option value="moderate-loss">
                  Moderate Weight Loss (15%)
                </Option>
                <Option value="small-loss">Weight Loss (10%)</Option>
                <Option value="maintain">Maintain Weight</Option>
                <Option value="moderate-gain">
                  Moderate Weight Gain (10%)
                </Option>
                <Option value="aggressive-gain">
                  Agressive Weight Gain (15%)
                </Option>
              </Select>
            </div>

            <button>Sign Up</button>
          </Form>
        </FormContainer>
      </Container>
    );
  }
}

export default connect(
  null,
  { signup }
)(Register);
