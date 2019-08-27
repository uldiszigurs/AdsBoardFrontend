import React from "react";
import { Link } from "react-router-dom";

const Navigation = ({ user, logout }) => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-secondary'>
      <ul className='navbar-nav mr-auto'>
        <li className='nav-item'>
          <Link to='/' className='nav-link'>
            Home
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/register' className='nav-link'>
            Registration
          </Link>
        </li>
        {!user.token ? <li className='nav-item'>
          <Link to='/login' className='nav-link'>
            Login
          </Link>
        </li> : null}
        <li className='nav-item'>
          <Link to='/posts' className='nav-link'>
            Posts
          </Link>
        </li>
        {user.token ? (
        <li className='nav-item'>
          <Link to='/createpost' className='nav-link'>
            Create post
          </Link>
        </li> ) : null}
      </ul>
      {user.token ? (
        <button onClick={logout} className='btn btn-warning'>
          Log OUT!!!!
        </button>
      ) : null}
    </nav>
  );
};

export default Navigation;
