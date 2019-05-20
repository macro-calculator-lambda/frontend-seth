import axios from 'axios';

export const LOGIN_INITIALIZE = 'LOGIN_INITIALIZE';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const login = (credentials) => (dispatch) => {
	dispatch({ type: LOGIN_INITIALIZE });

	return axios
		.post('https://samr-health.herokuapp.com/oauth/token', credentials)
		.then((res) => {
			console.log(res);
		})
		.catch((err) => {
			console.log(err);
		});
};
