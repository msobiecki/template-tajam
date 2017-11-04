import React, { Component } from 'react';

import styles from './Footer-copyright.sass';

class FooterCopyright extends Component {
	render() {
		return (
			<div class="footer-copyright">
				<div class="footer-copyright__item">
					<a href="#" class="footer-copyright__link">HELP</a>
					<a href="#" class="footer-copyright__link">TERMS & CONDITION</a>
					<a href="#" class="footer-copyright__link">PRIVACY</a>
				</div>
				<div class="footer-copyright__item">
					<div class="footer-copyright__text">Copyright © 2015 - Tajem Creative</div>
				</div>
			</div>
		);
	}
}

export default FooterCopyright;
