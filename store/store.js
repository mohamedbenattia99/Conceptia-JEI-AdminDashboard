import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistReducer,persistStore } from 'redux-persist';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';
import { createWrapper } from 'next-redux-wrapper';

const bindMiddleware = (middleware) => {
    if (process.env.NODE_ENV !== 'production') {
        const { composeWithDevTools } = require('redux-devtools-extension');
        return composeWithDevTools(applyMiddleware(...middleware));
    }
    return applyMiddleware(...middleware);
};

////// FIXING THE NOOP STORAGE REDUX-PERSIST ERROR
import createWebStorage from "redux-persist/lib/storage/createWebStorage";

const createNoopStorage = () => {
    return {
        getItem(_key) {
            return Promise.resolve(null);
        },
        setItem(_key, value) {
            return Promise.resolve(value);
        },
        removeItem(_key) {
            return Promise.resolve();
        },
    };
};
const storage = typeof window !== "undefined" ? createWebStorage("local") : createNoopStorage();

////////////////*****************////////////////////////////

/*export const makeStore = (context) => {

    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(rootReducer,
        bindMiddleware([sagaMiddleware]));

    store.sagaTask = sagaMiddleware.run(rootSaga);

    return store;
};*/



const persistConfig = {
    key: 'RED SYS ',
    storage,
    whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

function configureStore(initialState) {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        persistedReducer,
        initialState,
        bindMiddleware([sagaMiddleware])
    );

    store.sagaTask = sagaMiddleware.run(rootSaga);
    store.__persistor = persistStore(store);

    return store;
}

export const wrapper = createWrapper(configureStore);

export default configureStore;
