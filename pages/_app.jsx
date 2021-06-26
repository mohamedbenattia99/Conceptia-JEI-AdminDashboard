import React, { useEffect } from 'react';
import DefaultLayout from '~/components/layouts/DefaultLayout';
import { wrapper } from '~/store/store';
import {useStore} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react';
import '~/styles/style.scss';
import 'antd/dist/antd.min.css';

function App({ Component, pageProps}) {
    const store = useStore();
    const getLayout =
        Component.getLayout || ((page) => <DefaultLayout children={page} />);
    useEffect(() => {
        setTimeout(function () {
            document.getElementById('__next').classList.add('loaded');
        }, 100);
    }, []);
    return getLayout(
        <PersistGate
            loading={<Component {...pageProps} />}
            persistor={store.__persistor}>
            <Component {...pageProps} />
        </PersistGate>
);
}

export default wrapper.withRedux(App);
