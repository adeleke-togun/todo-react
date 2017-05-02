import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: [
        {id: 1, name: 'Grocery Shopping', isComplete: true},
        {id: 2, name: 'Check weather', isComplete: false},
        {id: 3, name: 'Watch paint dry', isComplete: false}
      ],
      currentTask: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }
  handleInputChange (event) {
    this.setState ({
      currentTask: event.target.value
    })
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Todos</h2>
        </div>
        <div className="todo-app">
          <form>
            <input type="text" onChange={this.handleInputChange} value={this.state.currentTask}/>
          </form>
          <div>
            <ul>
              {this.state.todos.map(todo =>
                <li key={todo.id}>
                  <input type="checkbox" defaultChecked={todo.isComplete}/>{todo.name}
                </li>)
              }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
