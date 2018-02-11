import 'materialize-css/dist/css/materialize.min.css'
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';
import axios  from "axios";
window.axios=axios;
const store = createStore(reducers, {}, applyMiddleware(reduxThunk)); // Reducers => reutrns array[], {empty object as no server side rendering}

ReactDOM.render(
    <Provider store={store}><App/></Provider>, // provider checks the store and inform the APp if anything changes in data
        document.querySelector('#root'));
