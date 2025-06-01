import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './MenuBar.css';

function MenuBar() {
  const location = useLocation();

  return (
    <nav className="menu-bar">
      <Link 
        to="/about" 
        className={`menu-item ${location.pathname === '/about' ? 'active' : ''}`}
      >
        About Me
      </Link>
      <Link 
        to="/blogs" 
        className={`menu-item ${location.pathname === '/blogs' ? 'active' : ''}`}
      >
        Blogs
      </Link>
    </nav>
  );
}

export default MenuBar;
