/*eslint-disable import/default */
import 'babel-polyfill';  
import React from 'react';  
import { render } from 'react-dom';  
import configureStore from './store/configureStore';  
import { Provider } from 'react-redux';  
import { Router, browserHistory } from 'react-router';  
import routes from './routes';
import {loadCards} from './actions/cardActions';
import {loadKeys} from './actions/keyActions';

import injectTapEventPlugin from 'react-tap-event-plugin';


 
// Needed for onTouchTap 
// http://stackoverflow.com/a/34015469/988941 
injectTapEventPlugin();

const store = configureStore();

store.dispatch(loadKeys());

render(  
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);