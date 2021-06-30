import { all, put, takeEvery, call ,fork ,take ,cancel ,cancelled }  from 'redux-saga/effects';
import {notification } from 'antd';
import axios from 'axios';
import { actionTypes, loginError, loginSuccess, logOutSuccess } from './action';
import Router from 'next/router';


const modalSuccess = type => {
    notification[type]({
        message: 'Welcome back',
        description: 'You are logged in successful!',
    });
};

const modalError = type => {
    notification[type]({
        message: 'Error !',
        description: 'Wrong Credentials !',
    });
};

const modalWarning = type => {
    notification[type]({
        message: 'Good bye!',
        description: 'Logged out Successfully!',
    });
};

const loginApi= userData => {
    return axios
        .post("http://localhost:1337/auth/local",  userData)
        .then(response => response.data)
        .catch(err => {
            throw err;
        });
}



function* loginSaga(action) {

    try {
        const {userData}=action;
        const resp =yield call(loginApi,userData);
        if(resp.user.role.name === "Admin"){
            yield put(loginSuccess(resp.user,resp.jwt));
             localStorage.setItem('token', token.jwt)
            modalSuccess('success');
            Router.push('/');
        }else throw "Account Role is not Admin !";

    } catch (error) {
        console.error(error);
        yield put(loginError())
        modalError('error');

    }finally {
        if (yield cancelled()) {
            Router.push('/login');
        }
    }


}

function* logOutSaga() {
    try {
        yield put(logOutSuccess());
        modalWarning('warning');
        Router.push('/login');
    } catch (err) {
        console.log(err);
    }
}



export  default function* rootSaga (){
    yield all ([takeEvery(actionTypes.LOGIN_REQUEST,loginSaga)])
    yield all([takeEvery(actionTypes.LOGOUT,logOutSaga )])

}
