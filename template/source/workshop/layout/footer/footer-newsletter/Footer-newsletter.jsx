import React, { Component } from 'react';

import styles from './Footer-newsletter.sass';
import IconPlane from 'react-icons/lib/io/ios-paperplane-outline';


class FooterNewsletter extends Component {
	render() {
		return (
			<div class="footer-newsletter">
				<h3 class="footer-newsletter__title">{this.props.title}</h3>
				<div class="footer-newsletter__content">
					<form class="footer-newsletter__form">
						<div class="footer-newsletter__inputbox">
							<input class="footer-newsletter__input" type="email" name="footer-newsletter-email" placeholder={this.props.input.placeholder} required />
							<button class="footer-newsletter__button">
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
