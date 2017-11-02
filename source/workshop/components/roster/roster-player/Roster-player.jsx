import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PlayerAPI from '../../../../api';

class RosterPlayer extends Component {
	render() {
		const player = PlayerAPI.get(
			parseInt(props.match.params.number, 10)
		)
		if (!player) {
			return <div>Sorry, but the player was not found</div>
		}
		return (
			<div className="shopping-list">
				<h1>Shopping List for {this.props.name}</h1>
				<ul>
					<li>Instagram</li>
					<li>WhatsApp</li>
					<li>Oculus</li>
				</ul>
			</div>
		);
	}
}

export default RosterPlayer;