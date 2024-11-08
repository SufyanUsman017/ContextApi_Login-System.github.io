import React from 'react'
import '../components/Navbar.css'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {

    const navigate = useNavigate();


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
    <button onClick={()=>{navigate('signup')}}>Sign Up</button>
    <button onClick={()=>{navigate('signin')}}>Sign In</button>
      
      
    </div>
  </nav>

  )
}

export default Navbar
