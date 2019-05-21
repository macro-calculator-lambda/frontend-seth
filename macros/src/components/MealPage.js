import React from "react";
import { connect } from "react-redux";

import { goals, sampleDays, meals, calculateCalories } from "../utils";

class MealPage extends React.Component {
  constructor() {
    super();
    this.state = {
      mealPlan: ""
    };
  }

  handleChange = event => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  };

  render() {
    let totalCalories = calculateCalories(this.props.user);

    let protein = Math.ceil(totalCalories * 0.075);
    let carbs = Math.ceil(totalCalories * 0.1);
    let fat = Math.ceil(totalCalories * 0.033);

    function calculatePerMeal(macro, meal) {
      switch (meal) {
        case 2:
          return `${Math.ceil(macro / 8) * 2} grams per meal and ${Math.ceil(
            macro / 8
          )} grams per snack`;
        case 4:
        case 3:
          return `${Math.ceil(macro / meal)} grams per meal`;
        default:
          return "";
      }
    }
    return (
      <div>
        <h2>Meal Page</h2>
        <select name="mealPlan" id="" onChange={this.handleChange}>
          <option value="">Choose a Meal Plan</option>
          <option value="four">4 meals a day</option>
          <option value="three">3 Meals Per day</option>
          <option value="snack">3 Meals and 2 Snacks Per day</option>
        </select>
        <div>
          <h3>Meal Breakdown</h3>
          <ul>
            <li>
              Protein:
              {calculatePerMeal(protein, meals[this.state.mealPlan])}
            </li>
            <li>
              Carbs:
              {calculatePerMeal(carbs, meals[this.state.mealPlan])}
            </li>
            <li>Fat: {calculatePerMeal(fat, meals[this.state.mealPlan])}</li>
          </ul>
        </div>
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
)(MealPage);
