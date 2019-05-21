import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
`;

class SignUp extends React.Component {
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
    this.setState({
      userInfo: {
        ...this.state.userInfo,
        [event.target.name]: event.target.value
      }
    });
  };

  render() {
    return (
      <Container>
        <h1>Sign Up Below</h1>
        <div>
          <form>
            <div>
              <input
                onChange={this.handleChange}
                value={this.state.userInfo.username}
                type="text"
                name="username"
                placeholder="Username"
              />
            </div>
            <div>
              <input
                onChange={this.handleChange}
                value={this.state.userInfo.password}
                type="password"
                name="password"
                placeholder="Password"
              />
            </div>
            <div>
              <label htmlFor="gender">Gender: </label>
              <select
                onChange={this.handleChange}
                value={this.state.userInfo.gender}
                name="gender"
                id="gender"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div>
              <input
                onChange={this.handleChange}
                value={this.state.userInfo.age}
                type="number"
                name="age"
                placeholder="Age"
              />
            </div>
            <div>
              <label htmlFor="user-height">Select your Height:</label>
              <select
                onChange={this.handleChange}
                name="height"
                id="user-height"
                value={this.state.userInfo.height}
              >
                <option value="">Select Height</option>
                <option value="63">5' 3"</option>
                <option value="64">5' 4"</option>
                <option value="65">5' 5"</option>
                <option value="66">5' 6"</option>
                <option value="67">5' 7"</option>
                <option value="68">5' 8"</option>
                <option value="69">5' 9"</option>
                <option value="70">5' 10"</option>
                <option value="71">5' 11"</option>
                <option value="72">6'</option>
              </select>
            </div>
            <div>
              <input
                onChange={this.handleChange}
                value={this.state.userInfo.weight}
                type="number"
                name="weight"
                placeholder="Weight in pounds"
              />
            </div>
            <div>
              <label htmlFor="exercise-total">Exercise per week:</label>
              <select
                onChange={this.handleChange}
                value={this.state.userInfo.exercise}
                name="exercise"
                id="exercise-total"
              >
                <option value="">Select Exercise Days</option>
                <option value="0">0 days</option>
                <option value="1">1-2 days</option>
                <option value="3">3-4 days</option>
                <option value="5">5-6 days</option>
                <option value="7">7 days</option>
              </select>
            </div>
            <div>
              <label htmlFor="goal">Select your Goal:</label>
              <select
                onChange={this.handleChange}
                value={this.state.userInfo.goal}
                name="goal"
                id="goal"
              >
                <option value="">Select Goal</option>
                <option value="-20">Agressive Weight Loss (20%)</option>
                <option value="-15">Moderate Weight Loss (15%)</option>
                <option value="-10">Weight Loss (10%)</option>
                <option value="0">Maintain Weight</option>
                <option value="10">Moderate Weight Gain (10%)</option>
                <option value="15">Agressive Weight Gain (15%)</option>
              </select>
            </div>

            <button>Sign Up</button>
          </form>
        </div>
      </Container>
    );
  }
}

export default SignUp;
