import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
// component file
import TodoContainer from './classBased/components/TodoContainer';
// stylesheet
import './functionBased/App.css';
import 'tw-elements';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <TodoContainer />
    </Router>
  </React.StrictMode>,
);
