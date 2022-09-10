import React from 'react';

class InputTodo extends React.Component {
  state = {
    title: '',
  };

  onChange = e => {
    const { target:{ name, value } } = e
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    if(this.state.title.trim()){
      this.props.addTodo(this.state.title);
      this.setState({
        title: ''
      });
    }
    else alert('Kindly write a Todo');
    e.stopPropagation();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Add Todo..."
          value={this.state.title}
          name="title"
          onChange={this.onChange}
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default InputTodo;
