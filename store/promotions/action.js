export const actionTypes = {
    GET_PROMOTIONS: 'GET_PROMOTIONS',
    GET_PROMOTIONS_SUCCESS: 'GET_PROMOTIONS_SUCCESS',

    GET_BANNERS: 'GET_BANNERS',
    GET_BANNERS_SUCCESS: 'GET_BANNERS_SUCCESS',

    GET_COLLECTION_BY_CATEGORY: 'GET_COLLECTION_BY_CATEGORY',
    GET_COLLECTION_BY_CATEGORY_SUCCESS: 'GET_COLLECTION_BY_CATEGORY_SUCCESS',
};

export function getPromotions () {
    return { type: actionTypes.GET_PROMOTIONS };
}
export function getBanners () {
    return { type: actionTypes.GET_BANNERS };
}

export function getPromotionsSuccess(payload) {
    return {
        type: actionTypes.GET_PROMOTIONS_SUCCESS,
        payload,
    };
}
export function getBannersSuccess(payload) {
    return {
        type: actionTypes.GET_BANNERS_SUCCESS,
        payload,
    };
}

