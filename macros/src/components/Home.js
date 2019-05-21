import React from "react";
import { connect } from "react-redux";
import { PieChart } from "react-chartkick";
import Chart from "chart.js";

import { axiosWithAuth } from "../axiosWithAuth";

import { calculateCalories, macroCalculator, macros } from "../utils";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    axiosWithAuth()
      .get(`https://bwmc-backend.herokuapp.com/api/users/2`)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  render() {
    const totalCalories = calculateCalories(this.props.user);
    return (
      <div>
        <h1>Home</h1>
        <p>Total Calories Per day: {Math.ceil(totalCalories)}</p>
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
                {macro.name}: {macroCalculator(totalCalories, macro.value)}
              </li>
            );
          })}
        </ul>
        <p />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: {
      gender: state.user.gender,
      age: state.user.age,
      height: state.user.height,
      weight: state.user.weight,
      exerciseDays: state.user.exerciseDays,
      goal: state.user.goal
    }
  };
};

export default connect(
  mapStateToProps,
  {}
)(Home);
