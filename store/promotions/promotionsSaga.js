import { all, put, call, takeEvery } from 'redux-saga/effects';
import { polyfill } from 'es6-promise';
import {
    actionTypes, getBannersSuccess,
    getPromotionsSuccess
} from './action';
import PromotionsRepository  from '../../repositories/PromotionsRepository';
polyfill();

function* getPromotion() {
    try {
        const data = yield call(PromotionsRepository.getPromotions);
        yield put(getPromotionsSuccess(data));
    } catch (err) {
        console.log(err);
    }
}

function* getBanners() {
    try {
        const data = yield call(PromotionsRepository.getBanners);
        yield put(getBannersSuccess(data));
    } catch (err) {
        console.log(err);
    }
}

export default function* rootSaga() {

    yield all([takeEvery(actionTypes.GET_PROMOTIONS, getPromotion)]),
    yield all([takeEvery(actionTypes.GET_BANNERS, getBanners)])


}
