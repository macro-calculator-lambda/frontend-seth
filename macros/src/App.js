import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import './App.css';

function App() {
	return (
		<Router>
			<Navigation />
			<Route exact path="/" component={Home} />
			<Route path="/login" component={Login} />
			<Route path="/sign-up" component={SignUp} />
		</Router>
	);
}

export default App;
