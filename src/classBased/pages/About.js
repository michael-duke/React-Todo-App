import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import SinglePage from './SinglePage';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="about-app">About App</Link>
          </li>
          <li>
            <Link to="about-author">About Author</Link>
          </li>
        </ul>
        <Routes>
          <Route path=":slug" element={<SinglePage />} />
        </Routes>
      </div>
    );
  }
}

export default About;
