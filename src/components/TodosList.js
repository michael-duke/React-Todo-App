import React, {useState} from 'react';
import TodoItem from './TodoItem';

const TodosList = (props) => {
  const { todos, handleChange, deleteTodo, editTodo } = props;
  // const [editing, setEdit] = useState(false);

  // const setEditModeOff = (e) =>{
  //   const {target:{nodeName}} =e
  //   if(nodeName==='LI'){
     
  //     setEdit(!editing);
  //   }
  // }

  return (
    <ul style={{ overflowY: 'scroll', maxHeight: '250px'}}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChange={handleChange}
          deleteTodo={deleteTodo}
          editTodo = {editTodo}
        />
      ))}
    </ul>
  );
};

export default TodosList;
