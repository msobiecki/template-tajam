import React, { Component } from 'react';

import styles from './Footer-social.sass';
import IconFacebook from 'react-icons/lib/io/social-facebook';
import IconTwitter from 'react-icons/lib/io/social-twitter';
import IconDribbble from 'react-icons/lib/io/social-dribbble';
import IconInstagram from 'react-icons/lib/io/social-instagram';
import IconGoogleplus from 'react-icons/lib/io/social-googleplus';
import IconYoutube from 'react-icons/lib/io/social-youtube';


class FooterSocial extends Component {
	render() {
		return (
			<div className="footer-social">
				<a href="#" target="_blank" className="footer-social__item">
					<IconFacebook size={18} />
				</a>
				<a href="#" target="_blank" className="footer-social__item">
					<IconTwitter size={18} />
				</a>
				<a href="#" target="_blank" className="footer-social__item">
					<IconDribbble size={18} />
				</a>
				<a href="#" target="_blank" className="footer-social__item">
					<IconInstagram size={18} />
				</a>
				<a href="#" target="_blank" className="footer-social__item">
					<IconGoogleplus size={18} />
				</a>
				<a href="#" target="_blank" className="footer-social__item">
					<IconYoutube size={18} />
				</a>
			</div>
		);
	}
}

export default FooterSocial;
