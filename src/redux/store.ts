import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import {drinksReducer} from "./drinksReducer";
import {rootSaga} from "../sagas/rootSaga";

export const rootReducer = combineReducers({
    drinks: drinksReducer
});

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
});


sagaMiddleware.run(rootSaga);
