
export const actionTypes = {
  GET_NEWSLETTER: "GET_NEWSLETTER",
  GET_NEWSLETTER_SUCCESS: "GET_NEWSLETTER_SUCCESS",
  GET_NEWSLETTER_ERROR: "GET_NEWSLETTER_ERROR",

  //GET_NEWSLETTER_BY_DATE: "GET_ORDERS_BY_DATE",
  GET_TOTAL_OF_NEWSLETTER: "GET_TOTAL_OF_NEWSLETTER",
  GET_TOTAL_OF_NEWSLETTER_SUCCESS: "GET_TOTAL_OF_NEWSLETTER_SUCCESS",

  //GET_NEWSLETTER_COUNT_BY_DATE :"GET_ORDERS_COUNT_BY_DATE",
  //GET_NEWSLETTER_COUNT_BY_DATE_SUCCESS :"GET_ORDERS_COUNT_BY_DATE_SUCCESS",
  //GET_NEWSLETTER_COUNT_BY_DATE_ERROR :"GET_ORDERS_COUNT_BY_DATE_ERROR"

};

export function getNewsletter(payload) {
// used for pagination payload  = {
//             _start: number,
//             _limit: number,
//         }
  return { type: actionTypes.GET_NEWSLETTER, payload };
}

export function getTotalNewsletter() {
  return { type: actionTypes.GET_TOTAL_OF_NEWSLETTER };
}

{/*
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
} */}

export function getNewsletterSuccess(data) {
  return {
    type: actionTypes.GET_NEWSLETTER_SUCCESS,
    data,
  };
}


export function getNewsletterError(error) {
  return {
    type: actionTypes.GET_NEWSLETTER_ERROR,
    error,
  };
}
