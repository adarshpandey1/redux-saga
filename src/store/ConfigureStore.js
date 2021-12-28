import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reducer from "reducer";
import counterReducer from "./counterReducer";
import UserReducer from "./UserReducer";

const reducer = combineReducer({
    counter:CounterReducer,
    user:userReducer
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(reducer,{},applyMiddleware(...middleware));

sagaMiddleware.run(watcherSaga);

export default store;