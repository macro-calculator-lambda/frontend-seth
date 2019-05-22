import React from "react";
import { connect } from "react-redux";
import {
  meals,
  calculateCalories,
  macroCalculator,
  calculatePerMeal,
  macros
} from "../utils";

import { Container, Title, Select, Option } from "../styles";

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
    const totalCalories = calculateCalories(this.props.user);

    return (
      <Container>
        <Title>Meal Breakdown</Title>
        <Select name="mealPlan" id="meal-select" onChange={this.handleChange}>
          <Option value="">Choose a Meal Plan</Option>
          <Option value="four">4 meals a day</Option>
          <Option value="three">3 Meals Per day</Option>
          <Option value="snack">3 Meals and 2 Snacks Per day</Option>
        </Select>
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
  {}
)(MealPage);
