import { LOGIN_INITIALIZE, LOGIN_SUCCESS, LOGIN_FAIL } from "../actions";

const initialState = {
  isLoggingIn: false,
  error: "",
  user: {
    gender: "female",
    age: 27,
    height: 70,
    weight: 151,
    exerciseDays: 1,
    goal: "moderate-loss"
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_INITIALIZE:
      return {
        ...state,
        isLoggingIn: true,
        error: ""
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggingIn: false
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggingIn: false
      };
    default:
      return state;
  }
};

export default reducer;
