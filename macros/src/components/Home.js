import React from "react";
import { connect } from "react-redux";

import {
  calculateCalories,
  protein,
  carbs,
  fat,
  macroCalculator
} from "../utils";

const Home = props => {
  let totalCalories = calculateCalories(props.user);

  return (
    <div>
      <h1>Home</h1>
      <p>Total Calories Per day: {Math.ceil(totalCalories)}</p>
      <p>Macros: </p>
      <ul>
        <li>Protein: {macroCalculator(totalCalories, protein)} grams</li>
        <li>Carbs: {macroCalculator(totalCalories, carbs)} grams</li>
        <li>Fat: {macroCalculator(totalCalories, fat)} grams</li>
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
