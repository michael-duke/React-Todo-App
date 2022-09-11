import React, { useState, useEffect } from 'react';
import { MinusCircleIcon } from '@heroicons/react/24/outline';
import styles from './TodoItem.module.css';

const TodoItem = (props) => {
  const [editing, setEditing] = useState(false);

  const handleEditing = () => {
    setEditing(true);
  };

  const handleUpdatedDone = ({ key }) => {
    if (key === 'Enter') {
      setEditing(false);
    }
  };

  const handleEditingBlur = () => {
    setEditing(false);
  };

  const {
    todo: { id, title, completed },
    handleChange,
    deleteTodo,
    editTodo,
  } = props;

  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  let viewMode = {};
  let editMode = {};

  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  useEffect(() => {
    return () => {
      console.log('Cleaning up...');
    };
  }, []);

  return (
    <li className={styles.item}>
      <div onDoubleClick={handleEditing} style={viewMode}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={completed}
          onChange={() => handleChange(id)}
        />
        <button onClick={() => deleteTodo(id)} className="float-right mr-2">
          <MinusCircleIcon className="h-6 w-6" />
        </button>
        <span style={completed ? completedStyle : null}>{title}</span>
      </div>
      <input
        type="text"
        className={styles.textInput}
        style={editMode}
        value={title}
        autoFocus={true}
        onChange={(e) => {
          const {
            target: { value: updatedTitle },
          } = e;
          editTodo(updatedTitle, id);
        }}
        onKeyDown={handleUpdatedDone}
        onBlur={handleEditingBlur}
      />
    </li>
  );
};

export default TodoItem;
