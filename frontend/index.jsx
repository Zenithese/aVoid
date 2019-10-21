import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import configureStore from './store/store'

document.addEventListener('DOMContentLoaded', () => {
    let store = configureStore()
    const root = document.getElementById('root');

    ReactDOM.render(<App store={store}/>, root);
})
