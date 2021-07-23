import { all, put, takeEvery, call } from 'redux-saga/effects';
import { polyfill } from 'es6-promise';
import NewsletterRepository from '../../repositories/NewsletterRepository';

import {
    actionTypes,
    getNewsletterError,
    getNewsletterSuccess,
    getTotalNewsletter,
 
} from './action';
polyfill();

function* getNewsletter({ payload }) {
    try {
        const data = yield call(NewsletterRepository.getRecords,payload);
        console.log("datarepo",data)
        yield put(getNewsletterSuccess(data));
    } catch (err) {
        yield put(getNewsletterError(err));
    }
}

function* getTotalOfNewsletter() {
    // used to get all newsletter
    try {
        const result = yield call(NewsletterRepository.getTotalRecords);
        yield put(getTotalNewsletterSuccess(result));
    } catch (err) {
        console.log(err);
    }
}


export default function* rootSaga() {
    yield all([takeEvery(actionTypes.GET_NEWSLETTER, getNewsletter)]);

    yield all([
        takeEvery(actionTypes.GET_TOTAL_OF_NEWSLETTER, getTotalOfNewsletter)
    ]);

    yield all
}
