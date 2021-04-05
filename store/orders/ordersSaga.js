import { all, put, takeEvery, call } from 'redux-saga/effects';
import { polyfill } from 'es6-promise';
import OrderRepository from '../../repositories/OrderRepository(a revisiter)';

import {
    actionTypes,
    getOrdersError,
    getOrdersSuccess,
    getSingleOrderSuccess,
    getTotalOrdersSuccess,

} from './action';
polyfill();

function* getOrders({ payload }) {
    try {
        const data = yield call(OrderRepository.getRecords,payload);
        yield put(getOrdersSuccess(data));
    } catch (err) {
        yield put(getOrdersError(err));
    }
}

function* getTotalOfOrders() {
    try {
        const result = yield call(OrderRepository.getTotalRecords);
        yield put(getTotalOrdersSuccess(result));
    } catch (err) {
        console.log(err);
    }
}


function* getOrderById({ id }) {
    try {
        const order = yield call(OrderRepository.getOrderById, id);
        yield put(getSingleOrderSuccess(order));
    } catch (err) {
        yield put(getOrdersError(err));
    }
}

function* getOrdersByProductName({ productName }) {
    try {
        const result = yield call(
            OrderRepository.getOrdersByProduct,
            productName
        );
        yield put(getOrdersSuccess(result));
        yield put(getTotalOrdersSuccess(result.length));
    } catch (err) {
        yield put(getOrdersError(err));
    }
}

function* getOrdersByDate({ date }) {
    try {
        const result = yield call(
            OrderRepository.getOrdersByDate,
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

    yield all([takeEvery(actionTypes.GET_ORDER_BY_ID, getOrderById)]);

    yield all([ takeEvery(actionTypes.GET_ORDERS_BY_PRODUCT_NAME, getOrdersByProductName) ]);

    yield all([takeEvery(actionTypes.GET_ORDERS_BY_DATE,getOrdersByDate)]);

    yield all



}
