
export const actionTypes = {
    GET_CATEGORIES: 'GET_CATEGORIES',
    GET_CATEGORIES_SUCCESS: 'GET_CATEGORIES_SUCCESS',
    GET_CATEGORIES_ERROR: 'GET_CATEGORIES_ERROR',


    GET_TOTAL_OF_CATEGORIES: 'GET_TOTAL_OF_CATEGORIES',
    GET_TOTAL_OF_CATEGORIES_SUCCESS: 'GET_TOTAL_OF_CATEGORIES_SUCCESS',

};

export function getCategories(payload) {
    /* payload
    payload ={
        key : value
    }
     */
    return { type: actionTypes.GET_CATEGORIES, payload };
}

export function getTotalCategories() {
    return { type: actionTypes.GET_TOTAL_OF_CATEGORIES };
}


export function getTotalCategoriesSuccess(payload) {
    return {
        type: actionTypes.GET_TOTAL_OF_CATEGORIES_SUCCESS,
        payload,
    };
}

export function getCategoriesSuccess(data) {
    return {
        type: actionTypes.GET_CATEGORIES_SUCCESS,
        data,
    };
}

export function getCategoriesError(error) {
    return {
        type: actionTypes.GET_CATEGORIES_ERROR,
        error,
    };


}
