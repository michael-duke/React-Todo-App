import React from 'react';
import styles from './TodoItem.module.css';
class TodoItem extends React.Component {
  state = {
    editing: false,
  };

  handleEditing = () => {
    this.setState({
      editing: true,
    });
  };

  handleUpdatedDone = ({ key }) => {
    if (key === 'Enter') {
      this.setState({ editing: false });
    }
  };

  handleEditingBlur = () =>{
    this.setState({ editing: false });
  }

  componentWillUnmount() {
    console.log("Cleaning up...")
  }
  
  render() {
    const {
      todo: { id, title, completed },
      handleChange,
      deleteTodo,
      editTodo,
    } = this.props;
    const completedStyle = {
      fontStyle: 'italic',
      color: '#595959',
      opacity: 0.4,
      textDecoration: 'line-through',
    };

    let viewMode = {};
    let editMode = {};

    if (this.state.editing) {
      viewMode.display = 'none';
    } else {
      editMode.display = 'none';
    }
    return (
      <li className={styles.item}>
        <div onDoubleClick={this.handleEditing} style={viewMode}>
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={completed}
            onChange={() => handleChange(id)}
          />
          <button onClick={() => deleteTodo(id)}>Delete</button>
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
          onKeyDown={this.handleUpdatedDone}
          onBlur={this.handleEditingBlur}
        />
      </li>
    );
  }
}

export default TodoItem;
