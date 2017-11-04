import React, { Component } from 'react';

import styles from './Footer.sass';

import FooterBrand from './footer-brand/Footer-brand';
import FooterInfo from './footer-info/Footer-info';
import FooterNewsletter from './footer-newsletter/Footer-newsletter';
import FooterSocial from './footer-social/Footer-social';
import FooterCopyright from './footer-copyright/Footer-copyright';


class Footer extends Component {
	render() {
		return (
			<footer class="footer">
				<div class="footer__overlay">
					<img class="footer__background" src={require('./images/footer-background.jpg')} alt="Footer Background" />
				</div>
				<div class="footer__content">
					<div class="footer__container">
						<div class="footer__box">
							<div class="footer__item">
								<FooterBrand />
							</div>
							<div class="footer__item">
								<FooterInfo />
							</div>
							<div class="footer__item">
								<FooterNewsletter />
								<FooterSocial />
							</div>
							<div class="footer__item -long">
								<FooterCopyright />
							</div>
						</div>
					</div>
				</div>
			</footer>
		);
	}
}

Footer.defaultProps = {

};

export default Footer;
