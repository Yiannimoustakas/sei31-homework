import React, { Component } from 'react';
import Todos from './components/Todos';
import Headder from './components/layout/Headder';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'take out the trash',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'dinner with wife',
        completed: true
      },
      {
        id: uuid.v4(),
        title: 'meeting with boss',
        completed: false
      },
    ]
  }

  //Toggle Complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  //Delete Todo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }

  //Add Todo
  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] })
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Headder />
          <AddTodo addTodo={this.addTodo}/>
          <Todos todos={this.state.todos} markComplete={ this.markComplete } delTodo={this.delTodo}/>
        </div>
      </div>
    );
  }
}
export default App;
