import React from 'react';
import { Navbar, Icon, NavItem, Dropdown, Button } from 'react-materialize'
import { NavLink } from 'react-router-dom';

const NavBar = ({logout, history, loggedIn, username}) => {

  return(
      <Navbar brand='Lit Hop' className='orange darken-3' right fixed>
        {!loggedIn? <NavItem >
          <NavLink to='/'>Lit Hop</NavLink>
        </NavItem>: null}
        {!loggedIn? <NavItem >

           <NavLink to='/Login'>
            <Icon>person</Icon>
          </NavLink>

        </NavItem> : null}
        {!loggedIn ? <NavItem >
          <NavLink to='/Signup'>
            <Icon>person_add</Icon>
          </NavLink>
        </NavItem>: null}
        {loggedIn ?
          <Dropdown trigger={
		        <Button className='light-blue accent-3'>{username}</Button>
	         }>
            <NavItem><Icon left>home</Icon>Home</NavItem>
            <NavItem><Icon left>person</Icon>Profile</NavItem>
            <NavItem divider/>
            <NavItem><Icon left>grade</Icon>Adventure</NavItem>
            <NavItem divider/>
            <NavItem divider />
            <NavItem onClick={()=>logout(history)}><Icon left>person_outline</Icon>Sign Out</NavItem>
          </Dropdown>
	         : null}
      </Navbar>
  )
}

export default NavBar
