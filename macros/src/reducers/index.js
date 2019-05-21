import {
  LOGIN_INITIALIZE,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SIGNUP_INITIALIZE,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL
} from "../actions";

const initialState = {
  isLoggingIn: false,
  isSigningUp: false,
  error: "",
  user: {
    username: "",
    password: "",
    gender: "",
    age: "",
    height: "",
    weight: "",
    exerciseDays: "",
    goal: ""
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_INITIALIZE:
      return {
        ...state,
        isSigningUp: true,
        error: ""
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isSigningUp: false,
        user: action.payload
      };
    case SIGNUP_FAIL: {
      return {
        ...state,
        isSigningUp: false,
        error: action.payload
      };
    }
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
