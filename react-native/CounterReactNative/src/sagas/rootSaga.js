/*
rootSaga ==> to manage other sagas
 */
// Saga effects
import {delay} from 'redux-saga';
import {all} from 'redux-saga/effects';

import {watchDecrement, watchIncrement, sayHello} from "./counterSagas";

export default function* rootSaga() {
  yield all([
    sayHello,
    watchIncrement(),
    watchDecrement()
  ]);
}