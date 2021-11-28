import React from 'react';
import { NavLink } from 'react-router-dom';

const aStyle ={
  textDecoration: 'none',
};
const navStyle ={
  background: 'black'
}

const Header = () => {
  return (
    <div className="header">
      <h1>File Upload And Download</h1>
      <nav style={navStyle}>
        <NavLink activeClassName="active" to="/upload" exact={true} style={aStyle}>
          Upload
        </NavLink>
        <NavLink activeClassName="active" to="/list" style={aStyle}>
          Files List
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;