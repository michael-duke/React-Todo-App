import React from 'react';
import PropTypes from 'prop-types';

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
        <button type="button" className="input-submit">
          Submit
        </button>
      </form>
    );
  }
}

InputTodo.propTypes = { addTodo: PropTypes.func.isRequired };

export default InputTodo;
