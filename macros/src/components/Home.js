import React from "react";
import { connect } from "react-redux";
import { PieChart } from "react-chartkick";
import Chart from "chart.js";
import Loader from "react-loader-spinner";

import { getUserInfo } from "../actions";
import { Container, Title } from "../styles";

import { calculateCalories, macroCalculator, macros } from "../utils";

class Home extends React.Component {
  componentDidMount() {
    this.props.getUserInfo(localStorage.getItem("id"));
  }

  render() {
    if (!this.props.user) {
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
