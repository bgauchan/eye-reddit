import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import { Provider } from 'react-redux'
import App from './App';
import configureStore from './store'
import { selectSubreddit, fetchPostsIfNeeded } from './actions'

const store = configureStore()

store.dispatch(selectSubreddit('leanfire'))
store.dispatch(fetchPostsIfNeeded('leanfire'))

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
