export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const  SET_FILTER = " SET_FILTER";

import shortid from 'shortid';

export const addTodo = content => ({

  type: ADD_TODO,
  payload: {
    id: shortid.generate(),
    content: content
  }

})

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: {
    id: id
  }
})

export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });
