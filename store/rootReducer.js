import { combineReducers } from 'redux';

import auth from './auth/reducer';
import app from './app/reducer';
import orders from './orders/reducer'
import products from './products/reducer'
import categories from './categories/reducer'
import collections from './collections/reducer'
import promotions from './promotions/reducer'
export default combineReducers({
    auth,
    app,
    orders,
    products,
    categories,
    collections,
    promotions,
});
