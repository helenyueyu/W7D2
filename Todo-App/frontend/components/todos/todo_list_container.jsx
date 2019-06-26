import TodoList from './todo_list.jsx';

import allTodos from '../../reducers/selectors'; 

import { connect } from 'react-redux'; 
import { fetchAllTodos, createTodo } from '../../actions/todo_actions'; 
import { receiveErrors } from '../../actions/error_actions'; 

const mapStateToProps = state => ({
  todos: allTodos(state), 
  errors: state.errors 
}); 

const mapDispatchToProps = dispatch => ({
  fetchAllTodos: () => dispatch(fetchAllTodos()), 
  createTodo: todo => dispatch(createTodo(todo)), 
  receiveErrors: errors => dispatch(receiveErrors(errors))
}); 

export default connect(mapStateToProps, mapDispatchToProps)(TodoList); 