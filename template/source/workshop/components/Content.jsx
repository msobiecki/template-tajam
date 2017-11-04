import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './home/Home';
import Roster from './roster/Roster';
import Schedule from './schedule/Schedule';

class Content extends Component {
	render() {
		return (
			<div class="content">
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/roster' component={Roster} />
					<Route path='/schedule' component={Schedule} />
				</Switch>
			</div>
		);
	}
}

export default Content;
