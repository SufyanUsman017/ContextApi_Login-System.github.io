import React from 'react'

export default function SignIn() {
  return (
    <div>
     <div className="form-wrapper">
    <div className="signup-form">
      <h2>Sign In</h2>
      <form>
        
        <div className="form-control">
          <label htmlFor="username">Username</label>
          <i className="fas fa-user-circle"></i>
          <input type="text" id="username" placeholder="Choose a username" required onChange={(e)=>{setinputUname(e.target.value)}} />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <i className="fas fa-lock"></i>
          <input type="password" id="password" placeholder="Enter a password" required onChange={(e)=>{setInputPassword(e.target.value)}} /> 
        </div>
        <button  type="submit" className="signup-btn">Register</button>
      </form>
      
    </div>
  </div>
    </div>
  )
}
