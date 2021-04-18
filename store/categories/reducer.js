import { actionTypes } from './action';

export const initialState = {
    allCategories: null,
    error: false,
    totalCategories: 0,
    categoriesLoading:true ,
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.GET_CATEGORIES_SUCCESS:
            return {
                ...state,
                ...{ allCategories: action.data, categoriesLoading: false },
            };
        case actionTypes.GET_TOTAL_OF_CATEGORIES_SUCCESS:
            return {
                ...state,
                ...{ totalCategories: action.payload },
            };



        case actionTypes.GET_CATEGORIES_ERROR:
            return {
                ...state,
                ...{ error: action.error },
            };

        default:
            return state;
    }
}

export default reducer;
