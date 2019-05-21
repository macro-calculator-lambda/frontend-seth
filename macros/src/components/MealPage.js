import React from "react";
import { connect } from "react-redux";

import {
  meals,
  calculateCalories,
  protein,
  carbs,
  fat,
  macroCalculator,
  calculatePerMeal
} from "../utils";

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

    return (
      <div>
        <h2>Meal Page</h2>
        <select name="mealPlan" id="meal-select" onChange={this.handleChange}>
          <option value="">Choose a Meal Plan</option>
          <option value="four">4 meals a day</option>
          <option value="three">3 Meals Per day</option>
          <option value="snack">3 Meals and 2 Snacks Per day</option>
        </select>
        <div>
          <h3>Meal Breakdown</h3>
          <div>
            <div>
              Protein:
              {calculatePerMeal(
                macroCalculator(totalCalories, protein),
                meals[this.state.mealPlan]
              )}
            </div>
            <div>
              Carbs:
              {calculatePerMeal(
                macroCalculator(totalCalories, carbs),
                meals[this.state.mealPlan]
              )}
            </div>
            <div>
              Fat:
              {calculatePerMeal(
                macroCalculator(totalCalories, fat),
                meals[this.state.mealPlan]
              )}
            </div>
          </div>
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
