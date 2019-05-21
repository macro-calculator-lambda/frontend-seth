import React from "react";
import { connect } from "react-redux";

import { calculateCalories } from "../utils";

const Home = props => {
  let totalCalories = calculateCalories(props.user);

  let protein = Math.ceil(totalCalories * 0.075);
  let carbs = Math.ceil(totalCalories * 0.1);
  let fat = Math.ceil(totalCalories * 0.033);

  return (
    <div>
      <h1>Home</h1>
      <p>Total Calories Per day: {Math.ceil(totalCalories)}</p>
      <p>Macros: </p>
      <ul>
        <li>Protein: {protein} grams</li>
        <li>Carbs: {carbs} grams</li>
        <li>Fat: {fat} grams</li>
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
