import React from "react";
import { connect } from "react-redux";
import { PieChart } from "react-chartkick";
import Chart from "chart.js";
import Loader from "react-loader-spinner";

import { getUserInfo, deleteUser } from "../actions";
import { Container, Title, Button, FlexContainer, FlexItem } from "../styles";

import { calculateCalories, macroCalculator, macros } from "../utils";
import SubNavigation from "./SubNavigation";

class Home extends React.Component {
  componentDidMount() {
    this.props.getUserInfo(localStorage.getItem("id"));
  }

  handleClick = event => {
    event.preventDefault();
    this.props.deleteUser(this.props.user.id).then(() => {
      localStorage.clear();
      this.props.history.push("/sign-up");
    });
  };

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
              <div style={{ textAlign: "center", marginTop: "3rem" }}>
                <Button danger onClick={this.handleClick}>
                  Delete Account
                </Button>
              </div>
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
    deletingUser: state.deletingUser,
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
  { getUserInfo, deleteUser }
)(Home);
