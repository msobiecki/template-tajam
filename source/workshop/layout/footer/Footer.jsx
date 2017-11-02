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
			<footer className="footer">
				<div className="footer__overlay">
					<img className="footer__background" src={require('./images/footer-background.jpg')} alt="Footer Background" />
				</div>
				<div className="footer__content">
					<div className="footer__container">
						<div className="footer__box">
							<div className="footer__item">
								<FooterBrand />
							</div>
							<div className="footer__item">
								<FooterInfo />
							</div>
							<div className="footer__item">
								<FooterNewsletter />
								<FooterSocial />
							</div>
							<div className="footer__item -long">
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
