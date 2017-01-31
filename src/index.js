import {Router, browserHistory, Route, IndexRoute} from 'react-router';
import {render} from 'react-dom';
import React from 'react';

import routes from './routes'
import App from './components/App';
import HomePage from './components/home/HomePage'
import {Provider} from 'react-redux';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css';
import createStore from './store/configureStore';
import {loadCourses} from './actions/courseAction';

const store = createStore();
store.dispatch(loadCourses())
render(<Provider store={store} >
  <Router history={browserHistory}>{routes}</Router>
  </Provider>, document.getElementById('app'));

