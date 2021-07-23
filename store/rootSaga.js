import { all } from 'redux-saga/effects';
import AppSaga from './app/saga';
import AuthSaga from './auth/saga';
import OrdersSaga from './orders/ordersSaga'
import productSaga from './products/productSaga'
import categoriesSaga from './categories/CategoriesSaga'
import promotionSaga from './promotions/promotionsSaga'
import newsletterSaga from './newsletter/saga'
export default function* rootSaga() {
    yield all([AppSaga(), AuthSaga(),OrdersSaga(),productSaga(),categoriesSaga(),promotionSaga(),newsletterSaga()]);
}
