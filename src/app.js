// ========================================================================
/* External */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

/* Interal */
import Nav from "./components/Nav/Nav";
import Menu from "./components/Menu/Menu";
import configureStore from './store/store';
import "./styles/_styles.scss";
// ========================================================================

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <Nav />
    <Menu/>
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
