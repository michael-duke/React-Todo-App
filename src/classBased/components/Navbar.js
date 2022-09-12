import React from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const links = [
      {
        id: 1,
        path: '/',
        text: 'Home',
      },
      {
        id: 2,
        path: '/about',
        text: 'About',
      },
    ];

    const activeClassName = 'active-link';
    return (
      <nav className="navBar">
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <NavLink
                to={link.path}
                exact="true"
                className={({ isActive }) => (isActive ? activeClassName : undefined)}
              >
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
