import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import Login from './Login';
import Home from './Home';
import Footer from './Footer.js';
import VotingList from './VotingList';
import CreateVoting from './CreateVoting';
import VotingPage from '../pages/VotingPage.js';

@inject('store', 'routing')
@observer
export default class App extends Component {
	constructor(props) {
		super(props);

		this.store = this.props.store;
	}

	authenticate(e) {
		if (e) e.preventDefault();

		this.store.appState.authenticate();
	}

	render() {
		return (
			<div className='wrapper'>
        <Route
          exact
          path='/'
          component={Home}
        />

        <Route
          exact
          path='/voting-list'
          component={VotingList}
        />

        <Route
          path='/create-voting'
          component={CreateVoting}
        />

        <Route
          exact
          path='/voting/:id'
          component={VotingPage}
        />

        <Route
          exact
          path='/login'
          component={Login}
        />

        <Footer />
			</div>
		);
	}
}
