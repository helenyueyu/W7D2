import * as todoApiUtil from '../utils/todo_api_util';
import { receiveErrors } from './error_actions'; 

export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';

export const receiveTodos = todos => ({
  type: RECEIVE_TODOS,
  todos
});

export const receiveTodo = todo => ({
  type: RECEIVE_TODO,
  todo
});

export const fetchAllTodos = () => (dispatch, getState) => {
  return todoApiUtil.fetchAllTodos()
    .then( res => dispatch(receiveTodos(res)));
};

export const createTodo = todo => (dispatch, getState) => {
  return todoApiUtil.createTodo(todo)
    .then(
      res => dispatch(receiveTodo(res)), 
      err => dispatch(receiveErrors(err.responseJSON))
      ); 
}; 

window.receiveTodos = receiveTodos;
window.receiveTodo = receiveTodo;
window.fetchAllTodos = fetchAllTodos;