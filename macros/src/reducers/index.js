import {
  LOGIN_INITIALIZE,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SIGNUP_INITIALIZE,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  FETCH_USER_INITIALIZE,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAIL,
  UPATE_USER_INITIALIZE,
  UPATE_USER_SUCCESS,
  UPATE_USER_FAIL
} from "../actions";

const initialState = {
  isLoggingIn: false,
  isSigningUp: false,
  fetchingUser: false,
  editingUser: false,
  error: "",
  id: "",
  user: {
    username: "",
    id: "",
    gender: "",
    age: "",
    height: "",
    weight: "",
    exercise: "",
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
        isSigningUp: false
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
        isLoggingIn: false,
        id: action.payload
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggingIn: false
      };
    case FETCH_USER_INITIALIZE:
      return {
        ...state,
        fetchingUser: true,
        error: ""
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        fetchingUser: false,
        user: action.payload,
        error: ""
      };
    case FETCH_USER_FAIL:
      return {
        ...state,
        fetchingUser: false,
        error: action.payload
      };
    case UPATE_USER_INITIALIZE:
      return {
        ...state,
        editingUser: true,
        error: ""
      };
    case UPATE_USER_SUCCESS:
      return {
        ...state,
        editingUser: false
      };
    default:
      return state;
  }
};

export default reducer;
