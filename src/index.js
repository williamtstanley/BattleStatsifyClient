import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { App } from './components';
import uiState from './reducers/uiState';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(uiState, applyMiddleware(thunk));

ReactDOM.render(
	(<Provider store={store}>
		<App />
	</Provider>), 
	document.getElementById('root')
);
registerServiceWorker();
