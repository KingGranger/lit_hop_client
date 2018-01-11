import React from 'react';
import { Navbar, Icon, NavItem } from 'react-materialize'
import { NavLink } from 'react-router-dom';

const NavBar = () => {

  return(
      <Navbar brand='Lit Hop' className='orange darken-3' right>
        <NavItem >
          <NavLink to='/'>Lit Hop</NavLink>
        </NavItem>
        <NavItem >
          <NavLink to='/Login'>
            <Icon>person</Icon>
          </NavLink>
        </NavItem>
        <NavItem >
          <NavLink to='/Signup'>
            <Icon>grade</Icon>
          </NavLink>
        </NavItem>
      </Navbar>
  )
}

export default NavBar
