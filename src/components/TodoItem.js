import React from 'react';

class TodoItem extends React.Component {
  render() {
    const { todo:{id, title,completed}, handleChange, deleteTodo } = this.props;
    return (
      <li>
        <input
          type="checkbox"
          checked={completed}
          onChange={()=>handleChange(id)}
        />
        <button onClick={()=>deleteTodo(id)}>Delete</button>
        {title}
      </li>
    );
  }
}

export default TodoItem;
