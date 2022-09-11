import React, { useState } from 'react';

const InputTodo = (props) => {
  const [inputText, setInputText] = useState({
    title: '',  
  });

  const onChange = (e) => {
    const { target:{ name, value } } = e
    
    setInputText({
      ...inputText,
      [name]:value
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {title} = inputText;

    if (title.trim()) {
      props.addTodo(title);
      setInputText({
        title:'',
      })
    } else alert('Kindly write a Todo');
    e.stopPropagation();
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add Todo..."
        value={inputText.title}
        name="title"
        onChange={onChange}
      />
      <button className="input-submit">Submit</button>
    </form>
  );
};

export default InputTodo;
