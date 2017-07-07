import 'react-hot-loader/patch';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import { BrowserRouter } from 'react-router-dom';
import routes from './routers';

import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';

const store = configureStore();

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store} key={module.hot ? new Date() : undefined}>
                <BrowserRouter>
                    { Component }
                </BrowserRouter>
            </Provider>
        </AppContainer>,
        document.getElementById('root')
    );
}

render(routes);

if (module.hot) {
    module.hot.accept(() => {
        render(routes);
    })
}