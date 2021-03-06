import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './store/reducer'
import { Provider } from 'react-redux'
import { createStore,compose,applyMiddleware } from 'redux' 
import thunk from 'redux-thunk'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css'


import { Button } from 'react-bootstrap';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(<Provider store = {store}><App /></Provider>,
    document.getElementById('root'));
    registerServiceWorker();
