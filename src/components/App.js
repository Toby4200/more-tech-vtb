import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import Login from './Login';
import Home from './Home';
import VotingList from './VotingList';
import CreateVoting from './CreateVoting';

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
					path='/login'
					component={Login}
				/>

				<Route
					path='/create-voting'
					component={CreateVoting}
				/>
				<Route
					exact
					path='/voting-list'
					render={props => (
						<Route {...props} component={VotingList} />
					)}
				/>
			</div>
		);
	}
}
