
export const actionTypes = {
  GET_ORDERS: "GET_ORDERS",
  GET_ORDERS_SUCCESS: "GET_ORDERS_SUCCESS",
  GET_ORDERS_ERROR: "GET_ORDERS_ERROR",

  GET_ORDERS_BY_PRODUCT_NAME: "GET_ORDERS_BY_PRODUCT_NAME",
  VALIDATE_ORDER :'VALIDATE_ORDER',
  VALIDATE_ORDER_SUCCESS :'VALIDATE_ORDER_SUCCESS',
  VALIDATE_ORDER_ERROR :'VALIDATE_ORDER_ERROR',
  GET_ORDERS_BY_DATE: "GET_ORDERS_BY_DATE",

  GET_ORDERS_BY_ID: "GET_ORDER_BY_ID",
  GET_SINGLE_ORDER_SUCCESS: "GET_SINGLE_ORDER_SUCCESS",
  GET_ORDERS_BY_KEYWORD: 'GET_ORDERS_BY_KEYWORD',
  GET_ORDERS_BY_KEYWORD_SUCCESS: 'GET_ORDERS_BY_KEYWORD_SUCCESS',
  GET_ORDERS_BY_PRODUCT_SUCCESS :'GET_ORDERS_BY_PRODUCT_SUCCESS',
  GET_TOTAL_OF_ORDERS: "GET_TOTAL_OF_ORDERS",
  GET_TOTAL_OF_ORDERS_SUCCESS: "GET_TOTAL_OF_ORDERS_SUCCESS",


  GET_ORDERS_COUNT_BY_DATE :"GET_ORDERS_COUNT_BY_DATE",
  GET_ORDERS_COUNT_BY_DATE_SUCCESS :"GET_ORDERS_COUNT_BY_DATE_SUCCESS",
  GET_ORDERS_COUNT_BY_DATE_ERROR :"GET_ORDERS_COUNT_BY_DATE_ERROR"

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


export function validateOrder(id,data){
  return {type :actionTypes.VALIDATE_ORDER,id,data}
};

export function validateOrderSuccess(payload){
  return {type :actionTypes.VALIDATE_ORDER_SUCCESS,payload}
};
export function validateOrderError(error){
  return {type :actionTypes.VALIDATE_ORDER_ERROR,error}
};

export function OrdersCountByDateError(error){
  return {type :actionTypes.GET_ORDERS_COUNT_BY_DATE_ERROR,error}
};

export function getOrdersCountByDate(){
  return {type :actionTypes.GET_ORDERS_COUNT_BY_DATE}
};


export function getOrdersCountByDateSuccess(payload){
  return {type :actionTypes.GET_ORDERS_COUNT_BY_DATE_SUCCESS,payload}
};






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
