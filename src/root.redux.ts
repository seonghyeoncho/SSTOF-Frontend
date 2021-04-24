import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import createSagaMiddleware from "redux-saga";
import {
  signupPageSaga as signupSaga,
  signup_reducer,
} from "./containers/signup";
import { configureStore } from "@reduxjs/toolkit";

const RootReducer = combineReducers({
  signup: signup_reducer,
});

function* rootSaga() {
  yield all([signupSaga()]);
}

const sagaMiddleware = createSagaMiddleware();

const Store = configureStore({
  reducer: RootReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export { Store, RootReducer };
