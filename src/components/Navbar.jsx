import React, { useState } from 'react';
import '../components/Navbar.css';
import useData from '../hooks/useData';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const { login, setLogin } = useData();
  const [menuActive, setMenuActive] = useState(false); // State for toggle button functionality

  const toggleMenu = () => {
    setMenuActive(!menuActive); // Toggle menu visibility
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img
          src="https://images.pexels.com/photos/16152996/pexels-photo-16152996/free-photo-of-portrait-of-a-young-man-standing-against-a-clear-sky-at-dusk.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
          alt="Profile Image"
        />
      </div>

      {/* Toggle Button (Visible only on mobile screens) */}
      <div className="toggle-button" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navbar Links */}
      <div className={`navbar-links ${menuActive ? 'active' : ''}`}>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/catagory">Category</Link>
      </div>

      {/* Navbar Buttons */}
      <div className="navbar-buttons">

        {
          login ?  '' : <button onClick={() => { navigate('/signup'); }}>Sign Up</button> 
        }
        {login ? '' : <button onClick={() => { navigate('/signin'); }}>Sign In</button> 

        }
        
       

        {login ? 
          <button
            onClick={() => { navigate('/signin'); setLogin(false)}} >Logout </button> : ''
        }
      </div>
    </nav>
  );
}

export default Navbar;
