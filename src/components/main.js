import React from 'react';

import Home from './home';
import LandingPage from './landingpage';
import Watch from './watch';
import Projects from './projects';
import Resume from './resume';

import { Switch, Route } from 'react-router-dom';

const Main = () => (
	<Switch> 
		<Route exact path="/" component={LandingPage} /> 
		<Route path='/home' component={Home} />
		<Route path='/watch' component={Watch} />
		<Route path='/projects' component={Projects} />
		<Route path='/resume' component={Resume} />

	</Switch>
)

export default Main; 