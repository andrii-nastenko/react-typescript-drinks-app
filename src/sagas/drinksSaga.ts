import {takeEvery, put, call} from 'redux-saga/effects';
import {
    isFetching, REQUEST_DETAILS, REQUEST_FILTER_IS_ALCOHOLIC, REQUEST_SEARCH_BY_NAME,
    setDrinkDetails, setDrinksByName, setFilterIsAlcoholic
} from "../redux/drinksActions";
import {drinksAPI} from "../api/drinksAPI";
import {requestDetailsType, requestFilterIsAlcoholicType, requestSearchByNameType} from "../interfaces/actionsType";

export function* drinksWatcher() {
    yield takeEvery(REQUEST_FILTER_IS_ALCOHOLIC, filterIsAlcoholicWorker)
    yield takeEvery(REQUEST_SEARCH_BY_NAME, searchByNameWorker)
    yield takeEvery(REQUEST_DETAILS, getDetailsWorker)
}

function* filterIsAlcoholicWorker(action: requestFilterIsAlcoholicType) {
    try {
        yield put(isFetching(true))
        const data = yield call(drinksAPI.filterIsAlcoholic, action.isAlcoholic)
        yield put(setFilterIsAlcoholic(data))
    } catch (e) {
        alert(e)
    } finally {
        yield put(isFetching(false))
    }
}

function* searchByNameWorker(action: requestSearchByNameType) {
    try {
        yield put(isFetching(true))
        const data = yield call(drinksAPI.searchByName, action.name)
        yield put(setDrinksByName(data))
    } catch (e) {
        alert(e)
    } finally {
        yield put(isFetching(false))
    }
}

function* getDetailsWorker(action: requestDetailsType) {
    try {
        yield put(isFetching(true))
        const data = yield call(drinksAPI.getDetails, action.id)
        yield put(setDrinkDetails(data))
    } catch (e) {
        alert(e)
    } finally {
        yield put(isFetching(false))
    }
}