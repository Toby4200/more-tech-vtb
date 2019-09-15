import('./styles/main.scss');
import React from 'react';
import { render } from 'react-dom';
import { Route, Router } from 'react-router-dom';
import { Provider } from 'mobx-react';
import { AppContainer } from 'react-hot-loader';
import { rehydrate, hotRehydrate } from 'rfx-core';

import { isProduction } from './utils/constants';
import App from './components/App';
import Login from './components/Login';
import VotingList from './components/VotingList';
import CreateVoting from './components/CreateVoting';
import VotingPage from './pages/VotingPage.js';

const createBrowserHistory = require('history').createBrowserHistory;

const store = rehydrate();

const renderApp = () => {
  const history = createBrowserHistory();

	render(
		<AppContainer>
			<Provider store={isProduction ? store : hotRehydrate()} >
				<Router history={history}>
					<div className='wrapper'>

						<Route
							path='/voting-list'
							component={VotingList}
						/>

						<Route
							path='/create-voting'
							component={CreateVoting}
						/>

						<Route
							path='/voting/:id'
							component={VotingPage}
						/>

						<Route
							path='/login'
							component={Login}
						/>
					</div>
				</Router>
			</Provider>
		</AppContainer>,
		document.getElementById('root')
	);
};

renderApp(App);

if (module.hot) {
	module.hot.accept(() => renderApp(App));
}
