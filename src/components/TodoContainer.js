import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './Header';
import InputTodo from './InputTodo';
import TodosList from './TodosList';
class TodoContainer extends React.Component {
  state = {
    todos: [
      {
        id: uuidv4(),
        title: 'Setup development environment',
        completed: true,
      },
      {
        id: uuidv4(),
        title: 'Develop website and add content',
        completed: false,
      },
      {
        id: uuidv4(),
        title: 'Deploy to live server',
        completed: false,
      },
    ],
  };

  handleChange = (todoId) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        const { id, completed } = todo;
        if (id === todoId) {
          return {
            ...todo,
            completed: !completed,
          };
        }
        return todo;
      }),
    }));
  };

  addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    };

    this.setState(({ todos }) => {
      return {
        todos: [...todos, newTodo],
      };
    });
  };

  delTodo = (todoId) => {
    this.setState((prevState) => {
      return {
        todos: [...prevState.todos.filter(({ id }) => id !== todoId)],
      };
    });
  };

  render() {
    return (
      <div className="container">
        <div className="inner">
          <Header />
          <InputTodo addTodo={this.addTodo} />
          <TodosList
            todos={this.state.todos}
            handleChange={this.handleChange}
            deleteTodo={this.delTodo}
          />
        </div>
      </div>
    );
  }
}
export default TodoContainer;
