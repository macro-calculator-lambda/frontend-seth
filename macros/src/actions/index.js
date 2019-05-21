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
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
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

  return axios
    .post(`https://bwmc-backend.herokuapp.com/api/register`, userData)
    .then(res => console.log(res))
    .catch(err => console.log(err));
};
