export const actionTypes = {
  GET_ORDERS: "GET_ORDERS",
  GET_ORDERS_SUCCESS: "GET_ORDERS_SUCCESS",
  GET_ORDERS_ERROR: "GET_ORDERS_ERROR",

  GET_ORDERS_BY_PRODUCT_NAME: "GET_ORDERS_BY_PRODUCT_NAME",

  GET_ORDERS_BY_DATE: "GET_ORDERS_BY_DATE",

  GET_ORDERS_BY_ID: "GET_ORDER_BY_ID",
  GET_SINGLE_ORDER_SUCCESS: "GET_SINGLE_ORDER_SUCCESS",
  GET_ORDERS_BY_KEYWORD: 'GET_ORDERS_BY_KEYWORD',
  GET_ORDERS_BY_KEYWORD_SUCCESS: 'GET_ORDERS_BY_KEYWORD_SUCCESS',
  GET_ORDERS_BY_PRODUCT_SUCCESS :'GET_ORDERS_BY_PRODUCT_SUCCESS',
  GET_TOTAL_OF_ORDERS: "GET_TOTAL_OF_ORDERS",
  GET_TOTAL_OF_ORDERS_SUCCESS: "GET_TOTAL_OF_ORDERS_SUCCESS",
};

export function getOrders(payload) {
// used for pagination payload  = {
//             _start: number,
//             _limit: number,
//         }
  return { type: actionTypes.GET_ORDERS, payload };
}

export function getTotalOrders() {
  return { type: actionTypes.GET_TOTAL_OF_ORDERS };
}

export function getOrderByKeywordsSuccess(payload) {
  return {
    type: actionTypes.GET_ORDERS_BY_KEYWORD_SUCCESS,
    payload,
  };
}

export function getOrdersByKeyword(keyword) {
  //used for search results
  //keyword : type string

  return {
    type: actionTypes.GET_ORDERS_BY_KEYWORD,
    keyword,
  };
}

export function getOrdersByProductName(productName) {
  // productName : type string
  return {
    type: actionTypes.GET_ORDERS_BY_PRODUCT_NAME,
    productName,
  };
}

export function getOrderById(id) {
  // id : type :string
  return {
    type: actionTypes.GET_ORDERS_BY_ID,
    id,
  };
}

export function getOrdersByDate(payload) {
   /*
   payload = {
     date_min : value  ,
     date_max : value
   }
   */
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
    type: actionTypes.GET_SINGLE_ORDER_SUCCESS,
    data,
  };
}

export function getOrdersError(error) {
  return {
    type: actionTypes.GET_ORDERS_ERROR,
    error,
  };
}
