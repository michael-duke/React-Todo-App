import React from 'react';
import PropTypes from 'prop-types';
import styles from './TodoItem.module.css';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editing: false };
  }

  componentWillUnmount() {
    return console.log('Cleaning up...');
  }

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

  handleEditingBlur = () => {
    this.setState({ editing: false });
  };

  render() {
    const {
      todo: { id, title, completed },
      handleChange,
      deleteTodo,
      editTodo,
    } = this.props;

    const { editing } = this.state;

    const completedStyle = {
      fontStyle: 'italic',
      color: '#595959',
      opacity: 0.4,
      textDecoration: 'line-through',
    };

    const viewMode = {};
    const editMode = {};

    if (editing) {
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
          <button type="button" onClick={() => deleteTodo(id)}>
            Delete
          </button>
          <span style={completed ? completedStyle : null}>{title}</span>
        </div>
        <input
          type="text"
          className={styles.textInput}
          style={editMode}
          value={title}
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

TodoItem.propTypes = {
  todo: PropTypes.shape.isRequired,
  handleChange: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
};

export default TodoItem;
