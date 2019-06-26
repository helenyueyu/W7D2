import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import Root from './components/root';
// import * as todoApiUtil from './utils/todo_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  const store = configureStore();
  window.store = store;

  // window.fetchAllTodos = todoApiUtil.fetchAllTodos;
  
  ReactDOM.render (
    <Root store={store}/>,
    root
  )
});