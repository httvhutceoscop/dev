/*
Saga là 1 hàm trong Redux saga (function có dấu *)
takeEvery - theo doi 1 action khi co thay doi, 1 action thay doi se chui vao
1 saga (goi 1 saga)

 */
import {INCREMENT, DECREMENT} from "../actions/actionTypes";

import {delay} from "redux-saga"
import {put, takeEvery} from "redux-saga/effects";
import {clone} from "@babel/types";

export function* sayHello() {
  console.log('Hello world! Saga');
}

function* increment() {
  console.log(`This is increment saga`);
}

export function* watchIncrement() {
  console.log(`watchIncrement saga`);
  yield takeEvery(INCREMENT, increment);
}

function* decrement() {
  console.log(`This is decrement saga`);
}

export function* watchDecrement() {
  console.log(`watchDecrement saga`);
  yield takeEvery(DECREMENT, decrement);
}