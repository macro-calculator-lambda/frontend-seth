import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
	return (
		<nav>
			<ul>
				<li>
					<NavLink to="/">Home</NavLink>
				</li>
				<li>
					<NavLink to="/login">Login</NavLink>
				</li>
				<li>
					<NavLink to="/sign-up">Sign Up</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;