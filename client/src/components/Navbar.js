import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import { isAuthenticated, logout } from '../fakeAuth';

const Navbar = () => (
  <Menu>
    <Menu.Item>
      <NavLink exact to='/'>Home</NavLink>
    </Menu.Item>
    <Menu.Item>
      <NavLink exact to='/about'>About</NavLink>
    </Menu.Item>
    <Menu.Item>
      <NavLink to='/menu'>Menu</NavLink>
    </Menu.Item>
  </Menu>
)

export default Navbar;