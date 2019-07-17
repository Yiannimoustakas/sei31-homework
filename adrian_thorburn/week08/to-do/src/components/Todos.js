import React, {Component} from 'react';
import Todoitem from './Todoitem';
import PropTypes from 'prop-types';


class Todos extends Component {
  render(){
    return this.props.todos.map((todo) => (
      <Todoitem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo}/>
    ));
  }
}


//Prop types
Todos.propTypes = {
  todos: PropTypes.array.isRequired
}


export default Todos;
