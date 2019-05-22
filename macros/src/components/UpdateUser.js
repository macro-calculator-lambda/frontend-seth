import React from "react";
import { connect } from "react-redux";

import { getUserInfo } from "../actions";

class UpdateUser extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    this.setState({
      user: this.props.user
    });
  }

  handleChange = event => {
    this.setState({});
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <h2>Update {this.props.user.username} Macros or Weight</h2>
        <form>
          <div>
            <label htmlFor="goal">Select your Goal:</label>
            <select
              onChange={this.handleChange}
              value={this.state.user.goal}
              name="goal"
              id="goal"
            >
              <option value="">Select Goal</option>
              <option value="aggressive-loss">
                Agressive Weight Loss (20%)
              </option>
              <option value="moderate-loss">Moderate Weight Loss (15%)</option>
              <option value="small-loss">Weight Loss (10%)</option>
              <option value="maintain">Maintain Weight</option>
              <option value="moderate-gain">Moderate Weight Gain (10%)</option>
              <option value="aggressive-gain">
                Agressive Weight Gain (15%)
              </option>
            </select>
          </div>
          <div>
            <input
              name="weight"
              type="number"
              onChange={this.handleChange}
              placeholder="Update weight"
              value={this.state.user.weight}
            />
          </div>
          <button>Update Macros</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
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
  {}
)(UpdateUser);
