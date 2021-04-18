import { all, put, takeEvery, call } from 'redux-saga/effects';
import { polyfill } from 'es6-promise';
import OrderRepository from '../../repositories/OrderRepository';

import {
    actionTypes,
    getOrdersError,
    getOrdersSuccess,
    getSingleOrderSuccess,
    getTotalOrdersSuccess,

} from './action';
polyfill();

function* getOrders({ payload }) {
    // used for pagination payload  = {
//             _start: number,
//             _limit: number,
//         }
    try {
        const data = yield call(OrderRepository.getRecords,payload);
        yield put(getOrdersSuccess(data));
    } catch (err) {
        yield put(getOrdersError(err));
    }
}

function* getTotalOfOrders() {
    // used to get all orders
    try {
        const result = yield call(OrderRepository.getTotalRecords);
        yield put(getTotalOrdersSuccess(result));
    } catch (err) {
        console.log(err);
    }
}

function* getOrderByKeyword({ keyword }) {
    //used for search results
    /*
         keyword ='' ;
     */
    try {
        const searchParams = {
            title_contains: keyword,
        };
            const result = yield call(OrderRepository.getRecords, searchParams);
            yield put(getOrdersSuccess(result));
    } catch (err) {
        yield put(getProductsError(err));
    }
}

function* getOrderById({ id }) {
    //used for single product
    const payload ={id: id}
    try {
        const order = yield call(OrderRepository.getOrderById, payload);
        yield put(getOrdersSuccess(order));
    } catch (err) {
        yield put(getOrdersError(err));
    }
}

function* getOrdersByProductName({ productName }) {
    // productName : type string
    const params = {
        product_name : productName ,
    }
    try {
        const result = yield call(
            OrderRepository.getRecords,
            params
        );
        yield put(getOrdersSuccess(result));
        yield put(getTotalOrdersSuccess(result.length));
    } catch (err) {
        yield put(getOrdersError(err));
    }
}

function* getOrdersByDate({ date }) {
    // date = {
    // date_min : value
    // date_max : value
    // }
    try {
        const result = yield call(
            OrderRepository.getRecords,
            date
        );
        yield put(getOrdersSuccess(result));
        yield put(getTotalOrdersSuccess(result.length));
    } catch (err) {
        yield put(getOrdersError(err));
    }
}






export default function* rootSaga() {
    yield all([takeEvery(actionTypes.GET_ORDERS, getOrders)]);

    yield all([
        takeEvery(actionTypes.GET_TOTAL_OF_ORDERS, getTotalOfOrders)
    ]);

    yield all([takeEvery(actionTypes.GET_ORDERS_BY_ID, getOrderById)]);

    yield all([ takeEvery(actionTypes.GET_ORDERS_BY_PRODUCT_NAME, getOrdersByProductName) ]);

    yield all([
        takeEvery(actionTypes.GET_ORDERS_BY_KEYWORD, getOrderByKeyword),
    ]);

    yield all([takeEvery(actionTypes.GET_ORDERS_BY_DATE,getOrdersByDate)]);

    yield all



}
