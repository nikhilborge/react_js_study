import React from 'react';
import {Link, NavLink} from 'react-router-dom';


function NavbarPage() {
  return (
    <div>
    <NavLink to="/about">About</NavLink>
      <NavLink className="navbarlink" to="/home">Home</NavLink>
      <NavLink to="/user/Anil">Anil</NavLink>
      <NavLink to="/user/nikhil">Nikhil</NavLink>
      <NavLink to="/user/usr">User</NavLink>
    </div>
  )
}

export default NavbarPage;