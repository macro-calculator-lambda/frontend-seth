import React from 'react';

class SignUp extends React.Component {
	constructor() {
		super();

		this.state = {
			userInfo: {
				username: '',
				password: '',
				height: '',
				weight: ''
			}
		};
	}

	render() {
		return (
			<div>
				<h1>Sign Up Below</h1>
				<div>
					<form>
						<div>
							<input type="text" name="username" placeholder="Username" />
						</div>
						<div>
							<input type="password" name="password" placeholder="Password" />
						</div>
						<div>
							<input type="text" name="gender" placeholder="Gender" />
						</div>
						<div>
							<input type="number" name="age" placeholder="Age" />
						</div>
						<div>
							<label for="user-height">Select your Height:</label>
							<select name="height" id="user-height">
								<option value="67">5' 7"</option>
								<option value="68">5' 8"</option>
								<option value="69">5' 9"</option>
								<option value="70">5' 10"</option>
								<option value="71">5' 11"</option>
								<option value="72">6'</option>
							</select>
						</div>
						<div>
							<input type="number" name="weight" placeholder="Weight in pounds" />
						</div>
						<div>
							<label for="exercise-total">Exercise per week:</label>
							<select name="exercise" id="exercise-total">
								<option value="0">0 days</option>
								<option value="1">1-2 days</option>
								<option value="3">3-4 days</option>
								<option value="5">5-6 days</option>
								<option value="7">7 days</option>
							</select>
						</div>
						<div>
							<label for="goal">Select your Goal:</label>
							<select name="goal" id="goal">
								<option value="-20">Agressive Weight Loss (20%)</option>
								<option value="-15">Moderate Weight Loss (15%)</option>
								<option value="-10">Weight Loss (10%)</option>
								<option value="0">Maintain Weight</option>
								<option value="10">Moderate Weight Gain (10%)</option>
								<option value="15">Agressive Weight Gain (15%)</option>
							</select>
						</div>

						<button>Sign Up</button>
					</form>
				</div>
			</div>
		);
	}
}

export default SignUp;
