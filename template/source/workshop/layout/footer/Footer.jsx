import React, { Component } from 'react';

import * as FooterActions from "./FooterActions";
import FooterStore from "./FooterStore";

import styles from './Footer.sass';

import FooterBrand from './footer-brand/Footer-brand';
import FooterInfo from './footer-info/Footer-info';
import FooterNewsletter from './footer-newsletter/Footer-newsletter';
import FooterSocial from './footer-social/Footer-social';
import FooterCopyright from './footer-copyright/Footer-copyright';


class Footer extends Component {
	constructor() {
		super();
		this.state = {
			loader: false,
			footer: FooterStore.get()
		}
	};
	componentDidMount() {
		this.getFooter();
	}

	componentWillMount() {
		FooterStore.on("fetch", this.setLoader.bind(this));
		FooterStore.on("receive", this.setFooter.bind(this));
	}

	componentWillUnmount() {
		FooterStore.removeListener("fetch", this.setLoader.bind(this));
		FooterStore.removeListener("receive", this.setFooter.bind(this));
	}

	getFooter() {
		FooterActions.getFooter();
	}

	setFooter() {
		console.log('[Footer] Uzyskanie danych')
		this.setState({
			footer: FooterStore.get(),
			loader: false
		});
	}

	setLoader() {
		console.log('[Footer] Ustawienie loadera')
		this.setState({
			loader: true
		});
	}

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

export default Footer;
