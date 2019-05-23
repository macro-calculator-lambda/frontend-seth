import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import SubNavigation from "./SubNavigation";

import {
  meals,
  calculateCalories,
  macroCalculator,
  calculatePerMeal,
  macros
} from "../utils";

import {
  Container,
  Title,
  SelectContainer,
  Select,
  Option,
  Card
} from "../styles";

const SmallContainer = styled(SelectContainer)`
  margin: 0 auto 1.5rem;
  max-width: 400px;
`;

const SubTitle = styled.h3`
  font-size: 2rem;
  text-align: center;
`;

const CardRow = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const CardTitle = styled.h4`
  font-size: 1.6rem;
  margin-bottom: 1rem;
`;

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
      <>
        <SubNavigation />
        <Container>
          <Title style={{ textAlign: "center" }}>Meal Breakdown</Title>

          <SmallContainer>
            <Select
              name="mealPlan"
              id="meal-select"
              onChange={this.handleChange}
            >
              <Option value="">Choose a Meal Plan</Option>
              <Option value="four">4 meals a day</Option>
              <Option value="three">3 Meals Per day</Option>
              <Option value="snack">3 Meals and 2 Snacks Per day</Option>
            </Select>
          </SmallContainer>
          <div>
            <SubTitle>Relevant Macros</SubTitle>
            <CardRow>
              {macros.map((macro, index) => {
                return (
                  <Card key={index}>
                    <CardTitle>{macro.name}</CardTitle>
                    <p>
                      {calculatePerMeal(
                        macroCalculator(totalCalories, macro.value),
                        meals[this.state.mealPlan]
                      )}
                    </p>
                  </Card>
                );
              })}
            </CardRow>
          </div>
        </Container>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
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
