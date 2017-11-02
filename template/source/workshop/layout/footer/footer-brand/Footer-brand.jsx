import React, { Component } from 'react';

import styles from './Footer-brand.sass';


class FooterBrand extends Component {
	render() {
		return (
			<div className="footer-brand">
				<div className="footer-brand__logobox">
					<img src={this.props.logo.image} alt={this.props.logo.text} />
				</div>
				<div className="footer-brand__text">
					{this.props.text}
				</div>
			</div>
		);
	}
}

FooterBrand.defaultProps = {
	logo: {
		image: require('./images/logo.png'),
		text: 'tajam'
	},
	text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu eros nisl. Etiam non tincidunt purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae'
};

export default FooterBrand;
