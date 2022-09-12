import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Header from './Header';
import InputTodo from './InputTodo';
import TodosList from './TodosList';
import Navbar from './Navbar';
import About from '../pages/About';
import NotMatch from '../pages/NotMatch';

function TodoContainer() {
  function getInitialTodos() {
    // getting stored items
    const temp = localStorage.getItem('todos');
    const savedTodos = JSON.parse(temp);
    return savedTodos || [];
  }

  const [todos, setTodos] = useState(getInitialTodos());

  const handleChange = (todoId) => {
    setTodos((prevState) => prevState.map((todo) => {
      const { id, completed } = todo;
      if (id === todoId) {
        return {
          ...todo,
          completed: !completed,
        };
      }
      return todo;
    }));
  };

  const addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  const delTodo = (todoId) => {
    setTodos([...todos.filter(({ id }) => id !== todoId)]);
  };

  const setUpdate = (updatedTitle, todoId) => {
    setTodos(
      todos.map((todo) => {
        const { id } = todo;
        if (id === todoId) {
          return {
            ...todo,
            title: updatedTitle,
          };
        }
        return todo;
      }),
    );
  };

  useEffect(() => {
    // storing todos items
    const temp = JSON.stringify(todos);
    localStorage.setItem('todos', temp);
  }, [todos]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          exact
          path="/"
          element={(
            <div className="container">
              <div className="inner">
                <Header />
                <InputTodo addTodo={addTodo} />
                <TodosList
                  todos={todos}
                  handleChange={handleChange}
                  deleteTodo={delTodo}
                  editTodo={setUpdate}
                />
              </div>
            </div>
          )}
        />
        <Route path="/about/*" element={<About />} />
        <Route path="*" element={<NotMatch />} />
      </Routes>
    </>
  );
}

export default TodoContainer;
