import React from 'react';
import { createRoot } from 'react-dom/client';
//component file
import TodoContainer from './functionBased/components/TodoContainer';
//stylesheet
import './functionBased/App.css';
import 'tw-elements';
const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>
);
