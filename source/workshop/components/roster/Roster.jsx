import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import RosterFull from './roster-full/Roster-full';
import RosterPlayer from './roster-player/Roster-player';

class Roster extends Component {
	render() {
		return (
			<Switch>
				<Route exact path='/roster' component={RosterFull} />
				<Route path='/roster/:number' component={RosterPlayer} />
			</Switch>
		);
	}
}

export default Roster;
