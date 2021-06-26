import { actionTypes } from './action';

export const initialState = {
    allOrders: null,
    singleOrder: null,
    error: false,
    totalOrders: 0,
    orderLoading: true ,
    ordersLoading: true,
    searchResults: null,
    recentOrders : null,
    recentOrdersLoading : true
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.GET_ORDERS_SUCCESS:
            return {
                ...state,
                ...{ allOrders: action.data, ordersLoading: false },
            };
        case actionTypes.GET_TOTAL_OF_ORDERS_SUCCESS:
            return {
                ...state,
                ...{ totalOrders: action.payload },
            };

        case actionTypes.VALIDATE_ORDER_SUCCESS:
            return {
                ...state

            };


        case actionTypes.VALIDATE_ORDER_ERROR:
            return {
                ...state,
                ...{ error :action.error },
            };



        case actionTypes.GET_ORDERS_ERROR:
            return {
                ...state,
                ...{ error: action.error },
            };

        case actionTypes.GET_ORDERS_COUNT_BY_DATE_SUCCESS:
            return {...state,...{recentOrders: action.payload, recentOrdersLoading: false}}

        case actionTypes.GET_ORDERS_COUNT_BY_DATE_ERROR:
            return {
                ...state,
                ...{ error: action.error },
            };

        default:
            return state;
    }
}

export default reducer;
