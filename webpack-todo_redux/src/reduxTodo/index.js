import React from 'react';
import ReactDOM from 'react-dom';

import TodoApp from './todoApp';
import store from "./redux/store";

import {Provider} from 'react-redux'


ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>, document.getElementById('app')
)
