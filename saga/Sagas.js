import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

import { REQUEST_API_DATA } from '../constants/constants'
import { receiveAPIData } from '../actions/Actions';

import { api } from '../API/API'

const apiCall = async () => {
    const res = await api.get()
    return res.data
}

function* getAPIData(action) {
    try {
        const data = yield call(apiCall);
        console.log(data)
        yield put(receiveAPIData(JSON.stringify(data)))
    } catch (e) {
        console.log(e)
    }
}

export default function* mySaga() {
    yield takeLatest(REQUEST_API_DATA, getAPIData);
}