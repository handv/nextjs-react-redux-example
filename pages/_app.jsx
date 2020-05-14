import App from 'next/app';
import {Provider} from 'react-redux';
import React from 'react';
import withRedux from "next-redux-wrapper";
import {PersistGate} from 'redux-persist/integration/react'
import {makeStore} from '../redux/redux.js';

import {fetchPracticeData} from '../redux/actions/counterActions'

class MyApp extends App {

    static async getInitialProps({Component, ctx}) {
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
        await ctx.store.dispatch(fetchPracticeData())
        //Anything returned here can be accessed by the client
        return {pageProps};
    }

    render() {
        //Page props that were returned  from 'getInitialProps' are stored in the props i.e. pageprops
        const {Component, pageProps, store} = this.props;

        return (
          <Provider store={store}>
            <PersistGate
              persistor={store.__persistor}
              loading={<div>Loading</div>}
            >
              <Component {...pageProps} />
            </PersistGate>
          </Provider>
        )
    }
}

//withRedux wrapper that passes the store to the App Component
export default withRedux(makeStore)(MyApp);

