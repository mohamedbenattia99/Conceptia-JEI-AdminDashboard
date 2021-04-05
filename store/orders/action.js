export const actionTypes = {
    GET_ORDERS: 'GET_ORDERS',
    GET_ORDERS_SUCCESS: 'GET_ORDERS_SUCCESS',
    GET_ORDERS_ERROR: 'GET_ORDERS_ERROR',

    GET_ORDERS_BY_PRODUCT_NAME: 'GET_ORDERS_BY_PRODUCT_NAME',


    GET_ORDERS_BY_DATE: 'GET_ORDERS_BY_DATE',


    GET_ORDER_BY_ID: 'GET_ORDER_BY_ID',
    GET_SINGLE_ORDER_SUCCESS: 'GET_SINGLE_ORDER_SUCCESS',


    GET_TOTAL_OF_ORDERS: 'GET_TOTAL_OF_ORDERS',
    GET_TOTAL_OF_ORDERS_SUCCESS: 'GET_TOTAL_OF_ORDERS_SUCCESS',


};

export function getOrders(payload) {
    return { type: actionTypes.GET_ORDERS, payload };
}

export function getTotalOrders() {
    return { type: actionTypes.GET_TOTAL_OF_ORDERS };
}

export function getSingleOrderSuccess(data) {
    return {
        type: actionTypes.GET_SINGLE_ORDER_SUCCESS,
        data,
    };
}


export function getOrdersByProductName(category) {
    return {
        type: actionTypes.GET_ORDERS_BY_PRODUCT_NAME,
        ProductName,
    };
}

export function getOrderById(id) {
    return {
        type: actionTypes.GET_ORDER_BY_ID,
        id,
    };
}

export function getOrdersByDate(payload) {
    return {
        type: actionTypes.GET_ORDERS_BY_DATE,
        payload,
    };
}

export function getTotalOrdersSuccess(payload) {
    return {
        type: actionTypes.GET_TOTAL_OF_ORDERS_SUCCESS,
        payload,
    };
}

export function getOrdersSuccess(data) {
    return {
        type: actionTypes.GET_ORDERS_SUCCESS,
        data,
    };
}

export function getSingleOrderSuccess(data) {
    return {
        type: actionTypes.GET_ORDER_BY_ID_SUCCESS,
        data,
    };
}




export function getOrdersError(error) {
    return {
        type: actionTypes.GET_ORDERS_ERROR,
        error,
    };
}

