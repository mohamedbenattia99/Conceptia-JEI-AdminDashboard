import { all, put, takeEvery, call } from 'redux-saga/effects';
import { polyfill } from 'es6-promise';
import categoriesRepository from '../../repositories/categoriesRepository';
import {
    actionTypes,
    getCategoriesError,
    getCategoriesSuccess,
    getTotalCategoriesSuccess,


} from './action';

polyfill();

function* getCategories({ payload }) {
    /* payload
  payload ={
      key : value
  }
   */
    try {
        const data = yield call(categoriesRepository.getProductCategories, payload);
        yield put(getCategoriesSuccess(data));
    } catch (err) {
        yield put(getCategoriesError(err));
    }
}

function* getTotalOfCategories() {
    try {
        const result = yield call(categoriesRepository.getTotalCategories);
        yield put(getTotalCategoriesSuccess(result));
    } catch (err) {
        console.log(err);
    }
}








export default function* rootSaga() {
    yield all([takeEvery(actionTypes.GET_CATEGORIES, getCategories)]);

    yield all([
        takeEvery(actionTypes.GET_TOTAL_OF_CATEGORIES, getTotalOfCategories),
    ]);


}