import { actionTypes } from './action';

export const initialState = {
    allNewsletter: null,
    error: false,
    totalNewsletter: 0,
    newsletterLoading: true,
    searchResults: null,
    recentNewsletter : null,
    recentNewsletterLoading : true
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.GET_NEWSLETTER_SUCCESS:
            return {
                ...state,
                ...{ allNewsletter: action.data, newsletterLoading: false },
            };
        case actionTypes.GET_TOTAL_OF_NEWSLETTER_SUCCESS:
            return {
                ...state,
                ...{ totalNewsletter: action.payload },
            };

        case actionTypes.GET_NEWSLETTER_ERROR:
            return {
                ...state,
                ...{ error: action.error },
            };
        default:
            return state;
    }
}

export default reducer;
