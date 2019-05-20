import { LOGIN_INITIALIZE, LOGIN_SUCCESS, LOGIN_FAIL } from '../actions';

const initialState = {
	users: [],
	isLoggingIn: false,
	error: ''
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN_INITIALIZE:
			return {
				...state,
				isLoggingIn: true,
				error: ''
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
