import React from 'react';
import { createRoot } from 'react-dom/client';
import TodoContainer from './components/TodoContainer';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>
);