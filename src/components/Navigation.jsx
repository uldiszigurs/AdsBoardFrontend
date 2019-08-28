import React from "react";
import { Link } from "react-router-dom";

const Navigation = ({ user, singlePostId, logout }) => { //_ID = singlePostId TODO: CAREFUL SEQUENCE
  const id = singlePostId;
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-secondary sticky-top'>
      <ul className='navbar-nav mr-auto'>
      {user.token ? (
        <li className='nav-item'>
          <Link to='/' className='nav-link'>
            Home
          </Link>
        </li>
        ) : null}
        {!user.token ? (
        <li className='nav-item'>
          <Link to='/register' className='nav-link'>
            Register
          </Link>
        </li>
        ) : null}
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
        {id ? (
        <li className='nav-item'>
          <Link to={`/post/${id}`} className='nav-link'>
            Last Viewed Post
          </Link>
        </li>
        ) : null}
      </ul>
      {user.token ? (
        <button onClick={logout} className='btn btn-warning'>
          Logout
        </button>
      ) : null}
    </nav>
  );
};

export default Navigation;
