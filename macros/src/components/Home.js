import React from "react";
import { connect } from "react-redux";

import { calculateCalories, macroCalculator, macros } from "../utils";

const Home = props => {
  const totalCalories = calculateCalories(props.user);

  return (
    <div>
      <h1>Home</h1>
      <p>Total Calories Per day: {Math.ceil(totalCalories)}</p>
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
};

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
