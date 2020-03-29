import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

import { selectSubreddit, fetchPosts } from './actions'
import reducers from './reducers'

const loggerMiddleware = createLogger()

const store = createStore(
	reducers,
	applyMiddleware(
		thunkMiddleware, // lets us dispatch() functions
		loggerMiddleware // neat middleware that logs actions
	)
)

store.dispatch(selectSubreddit('leanfire'))
store.dispatch(fetchPosts('leanfire')).then(() => console.log(store.getState()))

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
