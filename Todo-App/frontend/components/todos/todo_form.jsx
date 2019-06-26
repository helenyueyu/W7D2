import React from 'react'; 

import uniqueId from '../../utils/id_util';

class TodoForm extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      // id: uniqueId(), 
      title: '', 
      body: '', 
      done: false 
    }; 

    this.updateTitle = this.updateTitle.bind(this); 
    this.updateBody = this.updateBody.bind(this); 
    this.updateDone = this.updateDone.bind(this); 
    this.handleSubmit = this.handleSubmit.bind(this); 
  }

  updateTitle(e) {
    this.setState({
      title: e.target.value
    }); 
  }

  updateBody(e) {
    this.setState({
      body: e.target.value
    }); 
  }

  updateDone(e) {
    this.setState({
      done: !this.state.done
    });
  }

  handleSubmit(e) {
    e.preventDefault(); 
    this.props.createTodo(this.state).then(
      () => this.setState({
        // id: uniqueId(), 
        title: '',
        body: '',
        done: false
      })
    ); 
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}> 
        <label>
          Title: 
          <input type="text"
                value={this.state.title}
                onChange={this.updateTitle}/>
        </label>

        <label>
          Body: 
          <input type="text"
                value={this.state.body}
                onChange={this.updateBody}/>
        </label>

        <label>
          Complete: 
          <input type="checkbox" 
                value="Done"
                onChange={this.updateDone}/>
        </label>

        <input type="submit" value="Add Todo!"/>
        {this.props.errors.map(err => <h3>{err}</h3>)}
      </form> 
    )
  }
}

export default TodoForm; 