import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { PieChart } from "react-chartkick";
import Chart from "chart.js";
import Loader from "react-loader-spinner";

import { getUserInfo } from "../actions";
import { Container, Title, FlexContainer, FlexItem, Card } from "../styles";

import { calculateCalories, macroCalculator, macros } from "../utils";
import SubNavigation from "./SubNavigation";

class Home extends React.Component {
  componentDidMount() {
    this.props.getUserInfo(localStorage.getItem("id"));
  }

  render() {
    if (this.props.fetchingUser) {
      return (
        <Container textCenter>
          <Loader type="ThreeDots" color="#8A42A9" height="200" width="200" />
        </Container>
      );
    }
    const totalCalories = calculateCalories(this.props.user);

    return (
      <>
        <SubNavigation />
        <Container>
          <FlexContainer center>
            <FlexItem>
              <Card>
                <Title>{this.props.user.username}</Title>
                <p>
                  Recommended Total Calories per day:{" "}
                  {Math.ceil(calculateCalories(this.props.user))}
                </p>
                <h2>Macro Breakdown</h2>

                <ul style={{ marginBottom: "3rem" }}>
                  {macros.map((macro, index) => {
                    return (
                      <li key={index}>
                        {macro.name}:{" "}
                        {macroCalculator(totalCalories, macro.value)} grams per
                        day
                      </li>
                    );
                  })}
                </ul>
              </Card>
            </FlexItem>
            <FlexItem>
              {
                <PieChart
                  colors={["#FF6666", "#6766FF", "#FFC04C"]}
                  donut={true}
                  data={macros.map(macro => {
                    return [
                      macro.name,
                      macroCalculator(totalCalories, macro.value)
                    ];
                  })}
                />
              }
            </FlexItem>
          </FlexContainer>
        </Container>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    id: state.id,
    fetchingUser: state.fetchingUser,
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

export default withRouter(
  connect(
    mapStateToProps,
    { getUserInfo }
  )(Home)
);
