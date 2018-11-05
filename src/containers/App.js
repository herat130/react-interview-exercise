import React, { Component } from 'react';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

import FriendListApp from './FriendListApp';
import * as reducers from '../reducers';
import polyfills from '../utils/polyfill';

const reducer = combineReducers(reducers);
const store = createStore(reducer);

polyfills();

export default class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <FriendListApp />
        </Provider>
      </div>
    );
  }
}
