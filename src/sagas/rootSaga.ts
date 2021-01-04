import {fork} from 'redux-saga/effects'
import {drinksWatcher} from './drinksSaga'

export function* rootSaga() {
    yield fork(drinksWatcher)
}