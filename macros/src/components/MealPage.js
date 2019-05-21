import React from "react";
import { connect } from "react-redux";

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
    let femaleWeight = 4.35 * this.props.user.weight;
    let femaleHeight = 4.7 * this.props.user.height;
    let femaleAge = 4.5 * this.props.user.age;

    let femaleBMR = 655 + femaleWeight + femaleHeight - femaleAge;

    let maleBMR =
      66 +
      6.23 * this.props.user.weight +
      12.7 * this.props.user.height -
      6.8 * this.props.user.age;

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

    let meals = {
      four: 4,
      three: 3,
      snack: 2
    };

    function calculateCalories(gender, days, goal) {
      if (gender === "female") {
        return femaleBMR * days * goal;
      } else {
        return maleBMR * days * goal;
      }
    }

    let totalCalories = calculateCalories(
      this.props.user.gender,
      sampleDays[this.props.user.exerciseDays],
      goals[this.props.user.goal]
    );

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
