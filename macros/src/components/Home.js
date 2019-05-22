import React from "react";
import { connect } from "react-redux";
import { PieChart } from "react-chartkick";
import Chart from "chart.js";

import { getUserInfo } from "../actions";
import { Container, Title } from "../styles";
import { login } from "../actions";

import { calculateCalories, macroCalculator, macros } from "../utils";

class Home extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getUserInfo(localStorage.getItem("id"));
  }

  render() {
    if (this.props.fetchingUser) {
      return (
        <Container>
          <h2>Fetching Info...</h2>
        </Container>
      );
    }
    const totalCalories = calculateCalories(this.props.user);

    return (
      <Container>
        <h1>Home</h1>
        <p />
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
      </Container>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state);
  return {
    id: state.id,
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
  { getUserInfo }
)(Home);
