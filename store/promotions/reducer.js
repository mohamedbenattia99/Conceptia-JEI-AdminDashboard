import { actionTypes } from './action';

export const initialState = {
    promotions: [],
    promotionsLoading :true ,
    banners: [],
    bannersLoading :true ,
    categories: [],
    collection: {},
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.GET_PROMOTIONS_SUCCESS:
            return {
                ...state,
                ...{ promotions : action.payload,promotionsLoading: false },
            };

            case actionTypes.GET_BANNERS_SUCCESS:
            return {
                ...state,
                ...{ banners : action.payload,bannersLoading: false },
            };
        case actionTypes.GET_COLLECTION_SUCCESS:
            return {
                ...state,
                ...{ collection: action.payload },
            };
        case actionTypes.GET_COLLECTION_BY_CATEGORY_SUCCESS:
            return {
                ...state,
                ...{ categories: action.payload },
            };
        default:
            return state;
    }
}

export default reducer;
