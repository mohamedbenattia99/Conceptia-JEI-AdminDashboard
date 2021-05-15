import {actionTypes} from './action';

export const initialState = {
    allProducts: null ,
    error: false,
    updateSingleProduct : null ,
    updateLoading :true,
    totalProducts: 0,
    categories: null ,
    categoriesLoading :true ,
    brands: [],
    productsLoading: true,
    searchResults: null,
};



function reducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                ...{ allProducts: action.data, productsLoading: false },
            };
        case actionTypes.GET_TOTAL_OF_PRODUCTS_SUCCESS:
            return {
                ...state,
                ...{ totalProducts: action.payload },
            };

        case actionTypes.GET_PRODUCT_CATEGORIES_SUCCESS:
            return {
                ...state,
                ...{ categories: action.payload ,categoriesLoading: false},
            };


        case actionTypes.GET_PRODUCTS_ERROR:
            return {
                ...state,
                ...{ error: action.error },
            };

        case actionTypes.GET_UPDATE_SINGLE_PRODUCT :
            return {...state,...{updateSingleProduct:action.singleProduct,updateLoading: false}};

        case actionTypes.UPDATE_SINGLE_PRODUCT_SUCCESS :
            return {...state,...{allProducts:action.payload.data,productsLoading: false}};


        case actionTypes.DELETE_SINGLE_PRODUCT_SUCCESS :
            return {...state,...{productsLoading: false}};

        case actionTypes.UPDATE_SINGLE_PRODUCT_ERROR:
            return {
                ...state,
                ...{ error: action.error },
            };

        case actionTypes.DELETE_SINGLE_PRODUCT_ERROR:
            return {
                ...state,
                ...{ error: action.error },
            };



        case actionTypes.GET_PRODUCTS_CATEGORIES_ERROR:
            return {
                ...state,
                ...{ error: action.error },
            };

        default:
            return state;
    }
}

export default reducer;
