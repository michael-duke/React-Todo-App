import React from 'react';
import TodoItem from './TodoItem';

class TodosList extends React.Component {
  render() {
    const { todos, handleChange, deleteTodo, editTodo } = this.props;
    return (
      <ul style={{ overflowY: 'scroll', maxHeight: '250px' }}>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleChange={handleChange}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        ))}
      </ul>
    );
  }
}

export default TodosList;
