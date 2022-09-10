import React from 'react';
import { createRoot } from 'react-dom/client';
//component file
import TodoContainer from './components/TodoContainer';
//stylesheet
import './App.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>
);
