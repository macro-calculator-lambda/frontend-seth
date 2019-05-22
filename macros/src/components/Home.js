import React from "react";
import { connect } from "react-redux";
import { PieChart } from "react-chartkick";
import Chart from "chart.js";
import Loader from "react-loader-spinner";

import { getUserInfo, deleteUser } from "../actions";
import { Container, Title } from "../styles";

import { calculateCalories, macroCalculator, macros } from "../utils";

class Home extends React.Component {
  componentDidMount() {
    this.props.getUserInfo(localStorage.getItem("id"));
  }

  handleClick = event => {
    event.preventDefault();
    this.props.deleteUser(this.props.user.id).then(() => {
      localStorage.clear();
      this.props.history.push("/sign-up");
    });
  };

  render() {
    if (this.props.fetchingUser) {
      return (
        <Container>
          <Loader type="ThreeDots" color="#1f2a38" height="50" width="50" />
        </Container>
      );
    }
    const totalCalories = calculateCalories(this.props.user);

    return (
      <Container>
        <Title>Home</Title>
        <p>
          Recommended Total Calories Per day for {this.props.user.username}:
        </p>
        <p>{Math.ceil(calculateCalories(this.props.user))}</p>
        <div>
          <h2>Macro Breakdown</h2>
          {
            <PieChart
              data={macros.map(macro => {
                return [
                  macro.name,
                  macroCalculator(totalCalories, macro.value)
                ];
              })}
            />
          }
        </div>
        <p>Macros: </p>
        <ul>
          {macros.map((macro, index) => {
            return (
              <li key={index}>
                {macro.name}: {macroCalculator(totalCalories, macro.value)}{" "}
                grams per day
              </li>
            );
          })}
        </ul>
        <p />
        <button onClick={this.handleClick}>Delete Account</button>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    id: state.id,
    fetchingUser: state.fetchingUser,
    deletingUser: state.deletingUser,
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
  { getUserInfo, deleteUser }
)(Home);
