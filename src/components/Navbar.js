import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';

const Navbar = () => (
  <div className="navigation_container">
  <nav className="navigation">
    <h1>Bookstore CMS</h1>
    <ul>
      <li><Link to="/">BOOKS</Link></li>
      <li><Link to="/categories">CATEGORIES</Link></li>
    </ul>
    <span className="user-profile-wrapper">
    <FaUserAlt style={{
      color: '#0290ff',
      height: '15px',
      cursor: 'pointer',
      transition: 'all ease-in 300ms',
    }}
    />
  </span>
  </nav>
  </div>
);

export default Navbar;
