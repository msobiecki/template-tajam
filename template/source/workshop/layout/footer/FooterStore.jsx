import { EventEmitter } from "events";

import dispatcher from "../../../dispatcher";

class FooterStore extends EventEmitter {
	constructor() {
		super()
		this.footer = {
			logo: {
				src: '',
				alt: 'tajam'
			},
			text: '',
			info: {
				title: '',
				list: [
					{
						text: '',
						isHref: false
					},
					{
						text: '',
						url: '',
						isHref: true
					}
				]
			},
			newsletter: {
				title: '',
				placeholder: ''
			},
			social: [
				{
					url: '',
					target: '_blank'
				},
				{
					url: '',
					target: '_blank'
				},
				{
					url: '',
					target: '_blank'
				},
				{
					url: '',
					target: '_blank'
				},
				{
					url: '',
					target: '_blank'
				},
				{
					url: '',
					target: '_blank'
				}
			],
			menu: [
				{
					url: '',
					name: ''
				},
				{
					url: '',
					name: ''
				},
				{
					url: '',
					name: ''
				}
			]
		};
	}

	get() {
		return this.footer;
	}

	handleActions(action) {
		switch (action.type) {
			// Inicjalizacja pobrania danych
			case "FETCH_FOOTER": {
				this.emit("fetch");
				break;
			}
			// Pobranie danych
			case "RECEIVE_FOOTER": {
				this.footer = action.data
				this.emit("receive");
				break;
			}
		}
	}

}

const footerStore = new FooterStore;
dispatcher.register(footerStore.handleActions.bind(footerStore));

export default footerStore;