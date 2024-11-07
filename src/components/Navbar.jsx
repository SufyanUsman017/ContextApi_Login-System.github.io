import React from 'react'
import '../components/Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
    <div className="navbar-logo">
      <img src="https://images.pexels.com/photos/16152996/pexels-photo-16152996/free-photo-of-portrait-of-a-young-man-standing-against-a-clear-sky-at-dusk.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="Profile Image" />
    </div>
    
    <div className="navbar-links">
    <Link to="/home">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/catagory">Category</Link>
    </div>
    
    <div className="navbar-buttons">
    <Link to="/signup"><button>Sign Up</button></Link>
    <Link to="/signin"><button>Sign In</button></Link>
      
      
    </div>
  </nav>

  )
}

export default Navbar
