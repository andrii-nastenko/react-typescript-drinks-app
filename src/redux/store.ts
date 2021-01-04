import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import {drinksReducer} from "./drinksReducer";
import {rootSaga} from "../sagas/rootSaga";

export const rootReducer = combineReducers({
    drinks: drinksReducer
})

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(drinksReducer, compose(
    applyMiddleware(sagaMiddleware),
    composeWithDevTools() ? composeWithDevTools() : (f: () => void) => f
))

sagaMiddleware.run(rootSaga)