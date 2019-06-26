import React from 'react'; 

import TodoListItem from './todo_list_item'; 
import TodoForm from './todo_form'; 

class TodoList extends React.Component{
  componentDidMount() {
    this.props.fetchAllTodos();
  }

  render() {
    return (
      <div>
        <TodoForm fetchAllTodos={this.props.fetchAllTodos} 
                  createTodo={this.props.createTodo} 
                  receiveErrors={this.props.receiveErrors}
                  errors={this.props.errors}/>
        {this.props.todos.map(item => <TodoListItem key={item.id} item={item} />)}
      </div>
    )
  }
}

export default TodoList; 