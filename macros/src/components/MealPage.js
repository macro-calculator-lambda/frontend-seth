import React from "react";
import { connect } from "react-redux";

import { getUserInfo } from "../actions";

import {
  meals,
  calculateCalories,
  macroCalculator,
  calculatePerMeal,
  macros
} from "../utils";

class MealPage extends React.Component {
  constructor() {
    super();
    this.state = {
      mealPlan: ""
    };
  }

  componentDidMount() {
    this.props.getUserInfo(localStorage.getItem("id"));
  }

  handleChange = event => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  };

  render() {
    const totalCalories = calculateCalories(this.props.user);

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
            {macros.map((macro, index) => {
              return (
                <div key={index}>
                  <h4>{macro.name}</h4>
                  {calculatePerMeal(
                    macroCalculator(totalCalories, macro.value),
                    meals[this.state.mealPlan]
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
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
)(MealPage);
