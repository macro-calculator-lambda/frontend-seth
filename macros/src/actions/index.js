import axios from "axios";
import { axiosWithAuth } from "../axiosWithAuth";

export const LOGIN_INITIALIZE = "LOGIN_INITIALIZE";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

export const login = credentials => dispatch => {
  dispatch({ type: LOGIN_INITIALIZE });

  return axios
    .post(`https://bwmc-backend.herokuapp.com/api/login`, credentials)
    .then(res => {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("id", res.data.id);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.id });
    })
    .catch(err => {
      console.log(err);
    });
};

export const SIGNUP_INITIALIZE = "SIGNUP_INITIALIZE";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAIL = "SIGNUP_FAIL";

export const signup = userData => dispatch => {
  dispatch({ type: SIGNUP_INITIALIZE });

  return (
    axios
      .post(`https://bwmc-backend.herokuapp.com/api/register`, userData)
      .then(res => console.log(res))
      // .then(res => ({ type: SIGNUP_SUCCESS, payload: res.data.id }))
      .catch(err => console.log(err))
  );
};

export const FETCH_USER_INITIALIZE = "FETCH_USER_INITIALIZE";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAIL = "FETCH_USER_FAIL";

export const getUserInfo = id => dispatch => {
  dispatch({ type: FETCH_USER_INITIALIZE });

  axiosWithAuth()
    .get(`https://bwmc-backend.herokuapp.com/api/users/${id}`)
    .then(res => dispatch({ type: FETCH_USER_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FETCH_USER_FAIL, payload: err }));
};

export const UPATE_USER_INITIALIZE = "UPATE_USER_INITIALIZE";
export const UPATE_USER_SUCCESS = "UPATE_USER_SUCCESS";
export const UPDATE_USER_FAIL = "UPDATE_USER_FAIL";

export const updateUser = user => dispatch => {
  dispatch({ type: UPATE_USER_INITIALIZE });
  axiosWithAuth()
    .put(`https://bwmc-backend.herokuapp.com/api/users/${user.id}`, user)
    .then(res => dispatch({ type: UPATE_USER_SUCCESS }))
    .catch(err => console.log(err));
};
