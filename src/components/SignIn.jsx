
import React, { useState } from 'react'
import '../components/SignUp.css'
import useData from '../hooks/useData'
import { Link, useNavigate } from 'react-router-dom';

export default function SignIn() {

  const [loginName,setInputLoginName] = useState();
  const [loginPassword,setInputLoginPassword] = useState();
  const {users,setUsers,setLoginUser,setLogin} = useData();
  const navigate = useNavigate();

  function login (){
    
    console.clear();

    const found = users.find((items)=> items.userName == loginName && items.password == loginPassword  )

    if(found){
      alert('user mil gya')
      navigate('/profile')
      setLoginUser(found.userName)
      setLogin(true);

    }
    else{
      alert('Invalid userName and password')
    }
    

   


  }


  return (
    <div>
     <div className="form-wrapper">
    <div className="signup-form">
      <h2>Sign In</h2>
      <form>
        
        <div className="form-control">
          <label htmlFor="username">Username</label>
          <i className="fas fa-user-circle"></i>
          <input type="text" id="username" placeholder="Choose a username" required onChange={(e)=>{setInputLoginName(e.target.value)}} />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <i className="fas fa-lock"></i>
          <input type="password" id="password" placeholder="Enter a password" required onChange={(e)=>{setInputLoginPassword(e.target.value)}} /> 
        </div>
        <button onClick={login} type="submit" className="signup-btn">login</button>
      </form>
      <span className='link-last'><Link to={'/signup'}>do not have an account ?</Link></span>
      
    </div>
  </div>
    </div>
  )
}
