import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import configureStore from './store/store'

document.addEventListener('DOMContentLoaded', () => {
    let store = configureStore()


    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.getProps = store.getProps;

    const root = document.getElementById('root');
    ReactDOM.render(<App store={store}/>, root);
})
