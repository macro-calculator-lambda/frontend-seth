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
      dispatch({ type: LOGIN_FAIL, payload: "Login failed" });
    });
};

export const SIGNUP_INITIALIZE = "SIGNUP_INITIALIZE";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAIL = "SIGNUP_FAIL";

export const signup = userData => dispatch => {
  dispatch({ type: SIGNUP_INITIALIZE });

  return axios
    .post(`https://bwmc-backend.herokuapp.com/api/register`, userData)
    .then(res => ({ type: SIGNUP_SUCCESS }))
    .catch(err => ({ type: SIGNUP_FAIL, payload: "Error: Please Try Again" }));
};

export const FETCH_USER_INITIALIZE = "FETCH_USER_INITIALIZE";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAIL = "FETCH_USER_FAIL";

export const getUserInfo = id => dispatch => {
  dispatch({ type: FETCH_USER_INITIALIZE });

  axiosWithAuth()
    .get(`https://bwmc-backend.herokuapp.com/api/users/${id}`)
    .then(res => dispatch({ type: FETCH_USER_SUCCESS, payload: res.data }))
    .catch(err =>
      dispatch({ type: FETCH_USER_FAIL, payload: "Error Fetching Data" })
    );
};

export const UPDATE_USER_INITIALIZE = "UPDATE_USER_INITIALIZE";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_FAIL = "UPDATE_USER_FAIL";

export const updateUser = user => dispatch => {
  dispatch({ type: UPDATE_USER_INITIALIZE });
  return axiosWithAuth()
    .put(`https://bwmc-backend.herokuapp.com/api/users/${user.id}`, user)
    .then(res => dispatch({ type: UPDATE_USER_SUCCESS }))
    .catch(err =>
      dispatch({ type: UPDATE_USER_FAIL, payload: "Error Updating User" })
    );
};

export const DELETE_USER_INITIALIZE = "DELETE_USER_INITIALIZE";
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
export const DELETE_USER_FAIL = "DELETE_USER_FAIL";

export const deleteUser = id => dispatch => {
  dispatch({ type: UPDATE_USER_INITIALIZE });

  return axiosWithAuth()
    .delete(`https://bwmc-backend.herokuapp.com/api/users/${id}`)
    .then(res => dispatch({ type: DELETE_USER_SUCCESS }))
    .catch(err => dispatch({ type: DELETE_USER_FAIL, payload: err }));
};

export const LOGOUT_USER = "LOGOUT_USER";

export const logOut = () => dispatch => {
  dispatch({ type: LOGOUT_USER });
};
