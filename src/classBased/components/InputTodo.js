import React from 'react';
import PropTypes from 'prop-types';
import { PlusCircleIcon } from '@heroicons/react/24/outline';

class InputTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }

  onChange = (e) => {
    const {
      target: { name, value },
    } = e;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { title } = this.state;
    const { addTodo } = this.props;
    if (title.trim()) {
      addTodo(title);
      this.setState({
        title: '',
      });
    } else alert('Kindly write a Todo');
    e.stopPropagation();
  };

  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <input
          type="text"
          className="input-text"
          placeholder="Add Todo..."
          value={title}
          name="title"
          onChange={this.onChange}
        />
        <button type="submit" className="input-submit">
          <PlusCircleIcon className="h-6 w-6 stroke-blue-500" />
        </button>
      </form>
    );
  }
}

InputTodo.propTypes = { addTodo: PropTypes.func.isRequired };

export default InputTodo;
