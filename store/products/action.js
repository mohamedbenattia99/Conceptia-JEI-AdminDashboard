
export const actionTypes = {
    GET_PRODUCTS: 'GET_PRODUCTS',
    GET_PRODUCTS_SUCCESS: 'GET_PRODUCTS_SUCCESS',
    GET_PRODUCTS_ERROR: 'GET_PRODUCTS_ERROR',
    GET_PRODUCTS_CATEGORIES_ERROR: 'GET_PRODUCTS_CATEGORIES_ERROR',


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
    /* payload
    payload ={
        key : value
    }
     */
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

export function getProductsError(error) {
    return {
        type: actionTypes.GET_PRODUCTS_ERROR,
        error,
    };
}

export function getProductCategoriesError(error) {
    return {
        type: actionTypes.GET_PRODUCTS_CATEGORIES_ERROR
        ,
        error,
    };
}

export function getProductsByCategory(category) {
     // category  type :string  ;

    return {
        type: actionTypes.GET_PRODUCTS_BY_CATEGORY,
        category,
    };
}

export function getProductsByKeyword(keyword) {

    /// used for search by title
    // keyword : type object
    return {
        type: actionTypes.GET_PRODUCTS_BY_KEYWORD,
        keyword,
    };
}

export function getProductByProductNumber(number) {
    // number type : string
    return {
        type: actionTypes.GET_PRODUCT_BY_PRODUCT_NUMBER,
        number,
    };
}

export function getProductsByPriceRange(payload) {
   /*
        payload = {
            price_min : value ,
            price_max : value ,
    }*/
    return {
        type: actionTypes.GET_PRODUCTS_BY_PRICE_RANGE,
        payload,
    };
}
