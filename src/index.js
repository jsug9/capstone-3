import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './Styles/Style.scss';
import store from './Redux/configureStore';
import App from './App';
import { getCountries } from './Redux/countries/CountriesReducer';

store.dispatch(getCountries());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
