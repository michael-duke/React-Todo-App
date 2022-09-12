import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Header from './Header';
import InputTodo from './InputTodo';
import TodosList from './TodosList';
import Navbar from './Navbar';
import About from '../pages/About';
import NotMatch from '../pages/NotMatch';

class TodoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

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
    const { todos } = this.state;
    if (prevState.todos !== todos) {
      const temp = JSON.stringify(todos);
      localStorage.setItem('todos', temp);
    }
  }

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
      title,
      completed: false,
    };

    this.setState(({ todos }) => ({
      todos: [...todos, newTodo],
    }));
  };

  delTodo = (todoId) => {
    this.setState((prevState) => ({
      todos: [...prevState.todos.filter(({ id }) => id !== todoId)],
    }));
  };

  setUpdate = (updatedTitle, todoId) => {
    this.setState((prevState) => ({
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
    }));
  };

  render() {
    const { todos } = this.state;
    return (
      <>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/React-Todo-App"
            element={(
              <div className="container">
                <div className="inner">
                  <Header />
                  <InputTodo addTodo={this.addTodo} />
                  <TodosList
                    todos={todos}
                    handleChange={this.handleChange}
                    deleteTodo={this.delTodo}
                    editTodo={this.setUpdate}
                  />
                </div>
              </div>
            )}
          />
          <Route path="/React-Todo-App/about/*" element={<About />} />
          <Route path="/React-Todo-App/*" element={<NotMatch />} />
        </Routes>
      </>
    );
  }
}
export default TodoContainer;
