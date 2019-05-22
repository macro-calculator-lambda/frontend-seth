import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

import { updateUser } from "../actions";
import {
  Container,
  Title,
  FormContainer,
  Form,
  SelectContainer,
  Select,
  Label,
  Option,
  Input,
  Button
} from "../styles";

class UpdateUser extends React.Component {
  constructor() {
    super();
    this.state = {
      user: ""
    };
  }

  componentDidMount() {
    this.setState({
      user: this.props.user
    });
  }

  handleChange = event => {
    this.setState({
      user: {
        ...this.state.user,
        [event.target.name]: event.target.value
      }
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.updateUser(this.state.user);
  };

  render() {
    if (this.state.user === "") {
      return (
        <Container>
          <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
        </Container>
      );
    }

    if (this.props.editingUser === true && this.props.error === "") {
      return <Redirect to="/" />;
    }

    return (
      <Container>
        <FormContainer>
          <Title>Update Your Goal or Current Weight</Title>
          <Form onSubmit={this.handleSubmit}>
            <SelectContainer>
              <Label htmlFor="goal">Select your Goal:</Label>
              <Select
                onChange={this.handleChange}
                value={this.state.user.goal}
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
            </SelectContainer>

            <Input
              name="weight"
              type="number"
              onChange={this.handleChange}
              placeholder="Update weight"
              value={this.state.user.weight}
            />

            <Button>
              {this.props.editingUser ? (
                <Loader
                  type="ThreeDots"
                  color="#1f2a38"
                  height="12"
                  width="26"
                />
              ) : (
                "Update Goals"
              )}
            </Button>
          </Form>
        </FormContainer>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    editingUser: state.editingUser,
    response: state.response,
    error: state.error,
    user: {
      username: state.user.username,
      id: state.user.id,
      gender: state.user.gender,
      age: state.user.age,
      height: state.user.height,
      weight: state.user.weight,
      exercise: state.user.exercise,
      goal: state.user.goal
    }
  };
};

export default connect(
  mapStateToProps,
  { updateUser }
)(UpdateUser);
