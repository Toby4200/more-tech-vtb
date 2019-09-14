import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('store')
@observer
export default class Header extends Component {
	constructor(props) {
		super(props);
		this.store = this.props.store.appState;
	}

	authenticate(e) {
		if (e) e.preventDefault();

		console.log('CLICKED BUTTON');

		this.store.authenticate();
	}

	render() {
		const { authenticated } = this.store;

		return (
			<header className='header'>
        <div className="header__logo">
          <img src="https://user-media-prod-cdn.itsre-sumo.mozilla.net/uploads/products/2019-07-05-11-15-38-5096b6.png" alt=""/>
        </div>

        <div className="header__link-container">
          <ul className="header__link-items">
            <li className="header__item"><a href="https://ya.ru" className="header__link">Главная</a></li>
            <li className="header__item"><a href="https://ya.ru" className="header__link">Фичи</a></li>
            <li className="header__item"><a href="https://ya.ru" className="header__link">Мысли</a></li>
            <li className="header__item"><a href="https://ya.ru" className="header__link">Слова</a></li>
            <li className="header__item"><a href="https://ya.ru" className="header__link">О нас</a></li>
          </ul>
        </div>
			</header>
		);
	}
}
