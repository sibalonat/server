import { applyMiddleware, createStore } from "redux";

import App from './component/App';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';

const store = createStore(() => [], {}, applyMiddleware());

ReactDOM.render(
    <Provider store={store}><App /></Provider>, 
    document.querySelector('#root')
);
