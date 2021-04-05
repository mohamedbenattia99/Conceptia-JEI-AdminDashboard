import { combineReducers } from 'redux';

import auth from './auth/reducer';
import app from './app/reducer';
import orders from './orders/reducer'
import products from './products/reducer'

export default combineReducers({
    auth,
    app,
    orders,
    products,
});
