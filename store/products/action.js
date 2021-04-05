
export const actionTypes = {
    GET_PRODUCTS: 'GET_PRODUCTS',
    GET_PRODUCTS_SUCCESS: 'GET_PRODUCTS_SUCCESS',
    GET_PRODUCTS_ERROR: 'GET_PRODUCTS_ERROR',

    GET_PRODUCTS_BY_CATEGORY: 'GET_PRODUCTS_BY_CATEGORY',
    GET_PRODUCTS_BY_PRICE_RANGE: 'GET_PRODUCTS_BY_PRICE_RANGE',
    GET_PRODUCTS_BY_KEYWORD: 'GET_PRODUCTS_BY_KEYWORD',
    GET_PRODUCTS_BY_KEYWORD_SUCCESS: 'GET_PRODUCTS_BY_KEYWORD_SUCCESS',

    GET_PRODUCT_BY_PRODUCT_NUMBER: 'GET_PRODUCT_BY_PRODUCT_NUMBER',
    GET_SINGLE_PRODUCT_SUCCESS: 'GET_SINGLE_PRODUCT_SUCCESS',
    GET_PRODUCTS_BY_NAME: 'GET_PRODUCTS_BY_NAME',
    GET_PRODUCTS_BY_NAME_SUCCESS: 'GET_PRODUCTS_BY_NAME_SUCCESS',



    GET_TOTAL_OF_PRODUCTS: 'GET_TOTAL_OF_PRODUCTS',
    GET_TOTAL_OF_PRODUCTS_SUCCESS: 'GET_TOTAL_OF_PRODUCTS_SUCCESS',


    GET_PRODUCT_CATEGORIES: 'GET_PRODUCT_CATEGORIES',
    GET_PRODUCT_CATEGORIES_SUCCESS: 'GET_PRODUCT_CATEGORIES_SUCCESS',
};

export function getProducts(payload) {
    return { type: actionTypes.GET_PRODUCTS, payload };
}

export function getTotalProducts() {
    return { type: actionTypes.GET_TOTAL_OF_PRODUCTS };
}

export function getProductCategories() {
    return { type: actionTypes.GET_PRODUCT_CATEGORIES };
}

export function getProductCategoriesSuccess(payload) {
    return { type: actionTypes.GET_PRODUCT_CATEGORIES_SUCCESS, payload };
}

export function getTotalProductsSuccess(payload) {
    return {
        type: actionTypes.GET_TOTAL_OF_PRODUCTS_SUCCESS,
        payload,
    };
}

export function getProductsSuccess(data) {
    return {
        type: actionTypes.GET_PRODUCTS_SUCCESS,
        data,
    };
}
export function getProductByKeywordsSuccess(payload) {
    return {
        type: actionTypes.GET_PRODUCTS_BY_KEYWORD_SUCCESS,
        payload,
    };
}

export function getProductByName(name) {
    return {
        type: actionTypes.GET_PRODUCTS_BY_KEYWORD_SUCCESS,
        name,
    };
}

export function getProductByNameSuccess(data){
    return{type : actionTypes.GET_PRODUCTS_BY_NAME_SUCCESS , data}

}

export function getSingleProductsSuccess(data) {
    return {
        type: actionTypes.GET_SINGLE_PRODUCT_SUCCESS,
        data,
    };
}

export function getProductsError(error) {
    return {
        type: actionTypes.GET_PRODUCTS_ERROR,
        error,
    };
}

export function getProductsByCategory(category) {
    return {
        type: actionTypes.GET_PRODUCTS_BY_CATEGORY,
        category,
    };
}

export function getProductsByKeyword(keyword) {
    return {
        type: actionTypes.GET_PRODUCTS_BY_KEYWORD,
        keyword,
    };
}

export function getProductByProductNumber(number) {
    return {
        type: actionTypes.GET_PRODUCT_BY_PRODUCT_NUMBER,
        number,
    };
}

export function getProductsByPriceRange(payload) {
    return {
        type: actionTypes.GET_PRODUCTS_BY_PRICE_RANGE,
        payload,
    };
}
