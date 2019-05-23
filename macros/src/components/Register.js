import React from "react";
import { connect } from "react-redux";

import { signup } from "../actions";
import {
  Title,
  FormContainer,
  Form,
  Input,
  Select,
  Option,
  SelectContainer,
  Label,
  Button
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
      <FormContainer>
        <Title>Sign Up Below</Title>
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

          <SelectContainer>
            <Label htmlFor="gender">Gender: </Label>
            <Select
              onChange={this.handleChange}
              value={this.state.userInfo.gender}
              name="gender"
              id="gender"
            >
              <Option value="">Gender</Option>
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
            </Select>
          </SelectContainer>

          <Input
            onChange={this.handleChange}
            value={this.state.userInfo.age}
            type="number"
            name="age"
            placeholder="Age"
          />

          <SelectContainer>
            <Label htmlFor="user-height">Select your Height:</Label>
            <Select
              onChange={this.handleChange}
              name="height"
              id="user-height"
              value={this.state.userInfo.height}
            >
              <Option value="">Height</Option>
              <Option value="60">5'</Option>
              <Option value="61">5' 1"</Option>
              <Option value="62">5' 2"</Option>
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
              <Option value="73">6' 1"</Option>
              <Option value="74">6' 2"</Option>
              <Option value="75">6' 3"</Option>
              <Option value="76">6' 4"</Option>
              <Option value="77">6' 5"</Option>
              <Option value="78">6' 6"</Option>
            </Select>
          </SelectContainer>

          <Input
            onChange={this.handleChange}
            value={this.state.userInfo.weight}
            type="number"
            name="weight"
            placeholder="Weight in pounds"
          />

          <SelectContainer>
            <Label htmlFor="exercise-total">Exercise per week:</Label>
            <Select
              onChange={this.handleChange}
              value={this.state.userInfo.exercise}
              name="exercise"
              id="exercise-total"
            >
              <Option value="">Exercise Days</Option>
              <Option value="0">0 days</Option>
              <Option value="1">1-2 days</Option>
              <Option value="3">3-4 days</Option>
              <Option value="5">5-6 days</Option>
              <Option value="7">7 days</Option>
            </Select>
          </SelectContainer>
          <SelectContainer>
            <Label htmlFor="goal">Select your Goal:</Label>
            <Select
              onChange={this.handleChange}
              value={this.state.userInfo.goal}
              name="goal"
              id="goal"
            >
              <Option value="">Goal</Option>
              <Option value="aggressive-loss">
                Agressive Weight Loss (20%)
              </Option>
              <Option value="moderate-loss">Moderate Weight Loss (15%)</Option>
              <Option value="small-loss">Weight Loss (10%)</Option>
              <Option value="maintain">Maintain Weight</Option>
              <Option value="moderate-gain">Moderate Weight Gain (10%)</Option>
              <Option value="aggressive-gain">
                Agressive Weight Gain (15%)
              </Option>
            </Select>
          </SelectContainer>

          <Button>Sign Up</Button>
        </Form>
      </FormContainer>
    );
  }
}

export default connect(
  null,
  { signup }
)(Register);
