import React, { Component } from 'react';

import styles from './Footer-newsletter.sass';
import IconPlane from 'react-icons/lib/io/ios-paperplane-outline';


class FooterNewsletter extends Component {
	render() {
		return (
			<div className="footer-newsletter">
				<h3 className="footer-newsletter__title">{this.props.title}</h3>
				<div className="footer-newsletter__content">
					<form className="footer-newletter__form">
						<div className="footer-newsletter__inputbox">
							<input className="footer-newsletter__input" type="email" name="footer-newsletter-email" placeholder={this.props.input.placeholder} required />
							<button className="footer-newsletter__button">
								<IconPlane size={30} />
							</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

FooterNewsletter.defaultProps = {
	title: 'STAY IN TOUCH',
	input: {
		placeholder: 'Subscribe our newsletter'
	}
};

export default FooterNewsletter;
