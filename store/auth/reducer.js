import { actionTypes } from './action';

export const initState = {
    isLoggedIn: false,
    user : null,
    jwt : null
};

function reducer(state = initState, action) {
    switch (action.type) {
        case actionTypes.LOGIN_SUCCESS:
            return {
                isLoggedIn: true ,
                user : action.user,
                jwt: action.jwt
            };
        case actionTypes.LOGIN_FAILURE:
            return {
                ...state,
                isLoggedIn: false ,
            };

        case actionTypes.LOGOUT_SUCCESS:
            return {
                isLoggedIn: false,
                user : null,
                jwt : null
            };
        default:
            return state;
    }
}

export default reducer;
