
export const actionTypes = {
    GET_PRODUCTS: 'GET_PRODUCTS',
    GET_PRODUCTS_SUCCESS: 'GET_PRODUCTS_SUCCESS',
    GET_PRODUCTS_ERROR: 'GET_PRODUCTS_ERROR',
    UPDATE_SINGLE_PRODUCT : 'UPDATE_SINGLE_PRODUCT',
    UPDATE_SINGLE_PRODUCT_ERROR :'UPDATE_SINGLE_PRODUCT_ERROR',
    GET_UPDATE_SINGLE_PRODUCT : 'GET_UPDATE_SINGLE_PRODUCT',
    DELETE_SINGLE_PRODUCT : 'DELETE_SINGLE_PRODUCT',
    DELETE_SINGLE_PRODUCT_SUCCESS : 'DELETE_SINGLE_PRODUCT_SUCCESS',
    DELETE_SINGLE_PRODUCT_ERROR : 'DELETE_SINGLE_PRODUCT_ERROR',

    UPDATE_SINGLE_PRODUCT_SUCCESS : 'UPDATE_SINGLE_PRODUCT_SUCCESS',
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
    GET_PRODUCTS_CATEGORIES_ERROR: 'GET_PRODUCTS_CATEGORIES_ERROR',

    GET_PRODUCT_BRANDS: 'GET_PRODUCT_BRANDS',
    GET_PRODUCT_BRANDS_SUCCESS: 'GET_PRODUCT_BRANDS_SUCCESS',
    GET_PRODUCTS_BRANDS_ERROR: 'GET_PRODUCTS_BRANDS_ERROR',
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


export function getUpdateSingleProduct(singleProduct){
    return {type:actionTypes.GET_UPDATE_SINGLE_PRODUCT,singleProduct}
}
export function updateSingleProduct(id,query){
    return {type:actionTypes.UPDATE_SINGLE_PRODUCT,id,query}
}
export function updateSingleProductSuccess(payload){
    return {type:actionTypes.UPDATE_SINGLE_PRODUCT_SUCCESS,payload}
}
export function updateSingleProductError(error){
    return {type:actionTypes.UPDATE_SINGLE_PRODUCT_ERROR,error}
}

export function deleteSingleProduct(id){
    return {type:actionTypes.DELETE_SINGLE_PRODUCT,id}
}
export function deleteSingleProductSuccess(payload){
    return {type:actionTypes.DELETE_SINGLE_PRODUCT_SUCCESS,payload}
}
export function deleteSingleProductError(error){
    return {type:actionTypes.DELETE_SINGLE_PRODUCT_ERROR,error}
}

export function getProductCategories() {
    return { type: actionTypes.GET_PRODUCT_CATEGORIES };
}

export function getProductCategoriesSuccess(payload) {
    return { type: actionTypes.GET_PRODUCT_CATEGORIES_SUCCESS, payload };
}

export function getProductCategoriesError(error) {
    return {
        type: actionTypes.GET_PRODUCTS_CATEGORIES_ERROR
        ,
        error,
    };
}


export function getProductBrands() {
    return { type: actionTypes.GET_PRODUCT_BRANDS };
}

export function getProductBrandsSuccess(payload) {
    return { type: actionTypes.GET_PRODUCT_BRANDS_SUCCESS, payload };
}

export function getProductBrandsError(error) {
    return {
        type: actionTypes.GET_PRODUCTS_BRANDS_ERROR
        ,
        error,
    };
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
