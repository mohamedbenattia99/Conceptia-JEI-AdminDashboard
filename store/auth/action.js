export const actionTypes = {
    LOGIN_REQUEST: 'LOGIN_REQUEST',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_FAILURE: 'LOGIN_FAILURE',
    LOGOUT: 'LOGOUT',
    LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
    LOGIN_ERROR :' LOGIN_ERROR',

};

export const login = userData =>{
    return { type: actionTypes.LOGIN_REQUEST,
        userData,
    }
}
export const loginError=()=>{
    return{
        type:actionTypes.LOGIN_ERROR,
    }
}

export function loginSuccess(user,jwt) {
    return { type: actionTypes.LOGIN_SUCCESS,user,jwt };
}

export function logOut() {
    return { type: actionTypes.LOGOUT };
}

export function logOutSuccess() {
    return { type: actionTypes.LOGOUT_SUCCESS };


}
