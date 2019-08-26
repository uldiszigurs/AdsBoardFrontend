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
