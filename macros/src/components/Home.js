import React from "react";
import { connect } from "react-redux";

const Home = props => {
  let femaleWeight = 4.35 * props.user.weight;
  let femaleHeight = 4.7 * props.user.height;
  let femaleAge = 4.5 * props.user.age;

  let femaleBMR = 655 + femaleWeight + femaleHeight - femaleAge;

  let maleBMR =
    66 +
    6.23 * props.user.weight +
    12.7 * props.user.height -
    6.8 * props.user.age;

  let sampleDays = {
    0: 1.2,
    1: 1.375,
    3: 1.55,
    5: 1.725,
    7: 1.9
  };

  let goals = {
    "aggressive-loss": 0.8,
    "moderate-loss": 0.85,
    "small-loss": 0.9,
    maintain: 1,
    "moderate-gain": 1.1,
    "aggressive-gain": 1.15
  };

  function calculateCalories(gender, days, goal) {
    if (gender === "female") {
      return femaleBMR * days * goal;
    } else {
      return maleBMR * days * goal;
    }
  }

  let totalCalories = calculateCalories(
    props.user.gender,
    sampleDays[props.user.exerciseDays],
    goals[props.user.goal]
  );

  let protein = Math.floor(totalCalories * 0.075);
  let carbs = Math.floor(totalCalories * 0.1);
  let fat = Math.floor(totalCalories * 0.033);

  return (
    <div>
      <h1>Home</h1>
      <p>Total Calories Per day: {Math.floor(totalCalories)}</p>
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
