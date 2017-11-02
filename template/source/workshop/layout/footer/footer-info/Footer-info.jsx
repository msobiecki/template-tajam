import React, { Component } from 'react';

import styles from './Footer-info.sass';
import IconMarker from 'react-icons/lib/io/ios-locatoutline';
import IconPhone from 'react-icons/lib/io/ios-telephone-outline';


class FooterInfo extends Component {
	render() {
		return (
			<div className="footer-info">
				<h3 className="footer-info__title">{this.props.title}</h3>
				<div className="footer-info__list">
					<div className="footer-info__item">
						<div className="footer-info__icon">
							<IconMarker size={22} />
						</div>
						<div className="footer-info__text">
						{this.props.list[0].text}
						</div>
					</div>
					<div className="footer-info__item">
						<div className="footer-info__icon">
							<IconPhone size={22} />
						</div>
						<a href={this.props.list[1].url} className="footer-info__text">
							{this.props.list[1].text}
						</a>
					</div>
				</div>
			</div>
		);
	}
}

FooterInfo.defaultProps = {
	title: 'OUR STUDIO',
	list: [{
		text: 'Ruko cucruk, Jl. Radio luar delem jos No.12 - 13, Kalideres - Jakarta Barat 11480 - Indonesia'
	},
	{
		url: 'tel:+622122243333',
		text: '(+62) 21-2224 3333'
	}]
};

export default FooterInfo;