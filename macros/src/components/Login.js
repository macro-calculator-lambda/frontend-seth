import React from 'react';

class Login extends React.Component {
	constructor() {
		super();

		this.state = {
			credentials: {
				username: '',
				password: ''
			}
		};
	}

	render() {
		return (
			<div>
				<h1>Login Below</h1>
				<form>
					<input type="text" name="username" placeholder="Username" />
					<input type="password" name="password" placeholder="Password" />
					<button>Login</button>
				</form>
			</div>
		);
	}
}

export default Login;
