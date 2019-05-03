import React, {Component} from 'react';

// Redux
import {createStore, applyMiddleware} from "redux";
import {Provider} from 'react-redux';

import allReducers from './reducers';
import CounterContainer from './containers/CounterContainer';

// Redux saga
import createSagaMiddleWare from 'redux-saga';
import rootSaga from "./sagas/rootSaga";
// Middleware
const sagaMiddleware = createSagaMiddleWare();

let store = createStore(allReducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <CounterContainer />
      </Provider>
    );
  }
}
