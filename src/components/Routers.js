// Routes file. Defines the specific route pages for each component.
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Home from '../home';
import Login from '../login';
import Signup from '../signup';

const Routers = () => (
	<BrowserRouter>
		<Routes>
			<Route exact path="/" component={Home} />
			<Route path="/login" component={Login} />
			<Route path="/signup" component={Signup} />
			
			<Route path="*" component={Error} />
		</Routes>
	</BrowserRouter>
);

export default Routers;