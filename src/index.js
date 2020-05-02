import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import { Provider } from 'react-redux'
import App from './App';
import configureStore from './store'
import { 
	selectSubreddit, fetchPostsIfNeeded, 
	fetchReadPosts, fetchSubscriptions
} from './actions'

const store = configureStore()

store.dispatch(selectSubreddit('all'))
store.dispatch(fetchPostsIfNeeded('all'))
store.dispatch(fetchReadPosts('all'))
store.dispatch(fetchSubscriptions())

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
