import * as React from 'react';

import Todo from '../../data/Todo';

import List from './List';

export default class App extends React.Component {
  state: AppState;

  onComplete: (itemId: number) => void = (itemId) => this.setState({
    todos: this.state.todos.map((todo) => todo.id === itemId ? Object.assign(todo, { complete: true }) : todo)
  });

  constructor(props) {
    super(props);

    this.state = {
      todos: 
    };
  }

  render() {
    const { todos } = this.state;

    return (
      <div className="app">
        <h1>Hello New World!</h1>

        <List
          items={todos}
          onComplete={this.onComplete} />
      </div>
    );
  }
};