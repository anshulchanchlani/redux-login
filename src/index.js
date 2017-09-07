import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {createStore,applyMiddleware} from 'redux';
import allReducers from './reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {Provider} from 'react-redux';
 
const store = createStore(allReducers,{}, applyMiddleware(thunk, logger));

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, 
document.getElementById('root'));
registerServiceWorker();
