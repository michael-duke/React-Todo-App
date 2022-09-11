import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './Header';
import InputTodo from './InputTodo';
import TodosList from './TodosList';
class TodoContainer extends React.Component {
  state = {
    todos: [],
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

  setUpdate = (updatedTitle, todoId) => {
    this.setState((prevState) => {
      return {
        todos: prevState.todos.map((todo) => {
          const { id } = todo;
          if (id === todoId) {
            return {
              ...todo,
              title: updatedTitle,
            };
          }
          return todo;
        }),
      };
    });
  };

  // fetchTodos = async()=>{

  //   const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10");
  //   const todos = await response.json();
  //   this.setState({todos:todos})
  // }

  componentDidMount() {
    // this.fetchTodos();
    const temp = localStorage.getItem('todos');
    const loadedTodos = JSON.parse(temp);
    if (loadedTodos) {
      this.setState({
        todos: loadedTodos,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todos !== this.state.todos) {
      const temp = JSON.stringify(this.state.todos);
      localStorage.setItem('todos', temp);
    }
  }

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
            editTodo={this.setUpdate}
          />
        </div>
      </div>
    );
  }
}
export default TodoContainer;
