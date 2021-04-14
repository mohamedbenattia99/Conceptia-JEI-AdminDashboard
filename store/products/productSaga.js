import { all, put, takeEvery, call } from 'redux-saga/effects';
import { polyfill } from 'es6-promise';
import ProductRepository from '../../repositories/productRepository';
import {
    actionTypes,
    getProductsError,
    getProductsSuccess,
    getTotalProductsSuccess,
    getProductCategoriesSuccess,


} from './action';
import productRepository from "../../repositories/productRepository";

polyfill();

function* getProducts({ payload }) {
    /* payload
  payload ={
      key : value
  }
   */
    try {
        const data = yield call(ProductRepository.getRecords, payload);
        yield put(getProductsSuccess(data));
    } catch (err) {
        yield put(getProductsError(err));
    }
}

function* getTotalOfProducts() {
    try {
        const result = yield call(ProductRepository.getTotalRecords);
        yield put(getTotalProductsSuccess(result));
    } catch (err) {
        console.log(err);
    }
}


function* getProductCategories() {
    try {
        const result = yield call(ProductRepository.getProductCategories);
        yield put(getProductCategoriesSuccess(result));
    } catch (err) {
        console.log(err);
    }
}

function* getProductByProductNumber({ number }) {
    const params = {
        product_number: number,
    }
    try {
        const product = yield call(ProductRepository.getRecords, params);
        yield put(getProductsSuccess(product));
    } catch (err) {
        yield put(getProductsError(err));
    }
}

// function* getProductByKeyword({ keyword }) {
//     try {
//         const searchParams = {
//             title_contains: keyword,
//         };
//         const result = yield call(ProductRepository.getRecords, searchParams);
//         yield put(getProductsSuccess(result));
//     } catch (err) {
//         yield put(getProductsError(err));
//     }
// }


function* getProductByCategory({ category }) {
    try {
        const result = yield call(
            ProductRepository.getProductsByCategory,
            category
        );
        yield put(getProductsSuccess(result));
        yield put(getTotalProductsSuccess(result.length));
    } catch (err) {
        yield put(getProductsError(err));
    }
}


function* getProductByKeyword({ keyword }) {
    try {
        const searchParams = {
            title_contains: keyword,
        };
        const result = yield call(ProductRepository.getRecords, searchParams);
        yield put(getProductsSuccess(result));
    } catch (err) {
        yield put(getProductsError(err));
    }
}

function* getProductByPriceRange({ params }) {
    /* params = {
       price_min : value  ,
       price_max : value  ,
    }
     */
    try {
        const result = yield call(productRepository.getRecords, params);
        yield put(getProductsSuccess(result));
        yield put(getTotalProductsSuccess(result.length));
    }
    catch (err) {
        yield put(getProductsError(err));
    }
}



export default function* rootSaga() {
    yield all([takeEvery(actionTypes.GET_PRODUCTS, getProducts)]);

    yield all([
        takeEvery(actionTypes.GET_TOTAL_OF_PRODUCTS, getTotalOfProducts),
    ]);

    yield all([takeEvery(actionTypes.GET_PRODUCTS_BY_PRICE_RANGE, getProductByPriceRange)])

    yield all([
        takeEvery(actionTypes.GET_PRODUCT_CATEGORIES, getProductCategories),
    ]);

    yield all([
        takeEvery(actionTypes.GET_PRODUCTS_BY_CATEGORY, getProductByCategory),
    ]);

    yield all([
        takeEvery(actionTypes.GET_PRODUCTS_BY_KEYWORD, getProductByKeyword),
    ]);

    yield all([takeEvery(actionTypes.GET_PRODUCT_BY_PRODUCT_NUMBER, getProductByProductNumber)])



    yield all([takeEvery(actionTypes.GET_PRODUCTS_BY_PRICE_RANGE, getProductByPriceRange)])

}
