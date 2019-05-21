import axios from 'axios';

export const LOGIN_INITIALIZE = 'LOGIN_INITIALIZE';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const login = (credentials) => (dispatch) => {
	dispatch({ type: LOGIN_INITIALIZE });

	var queryString = Object.keys(credentials).map((key) => key + '=' + credentials[key]).join('&');
	console.log(queryString);
	return axios
		.request({
			method: 'post',
			url: 'https://samr-health.herokuapp.com/oauth/token',
			withCredentials: true,
			auth: {
				username: 'lambda-client', // This is the client_id
				password: 'lambda-secret' // This is the client_secret,
			},

			data: queryString
		})
		.then((respose) => {
			console.log(respose);
		})
		.catch((error) => {
			console.log(error);
		});

	// .post('https://samr-health.herokuapp.com/oauth/token', credentials)
	// .then((res) => {
	// 	console.log(res);
	// })
	// .catch((err) => {
	// 	console.log(err);
	// });
};
