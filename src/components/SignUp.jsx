import React, { useState } from 'react'
import '../components/SignUp.css'
import useData from '../hooks/useData'
import { Link, useNavigate } from 'react-router-dom';

export default function SignUp() {

   
    const [inputName,setInputName] = useState();
    const [inputUname,setinputUname] = useState();
    const [inputPassword,setInputPassword] = useState();
    let {users,setUsers} = useData()
    
    const navigate = useNavigate();
    
    
    const register = ()=>{
        console.clear()
        

        const person = {
            name:inputName,
            userName:inputUname,
            password:inputPassword
        }

        const found = users.find((items)=> items.userName == person.userName )

        if(!found){
            // setUsers([...users, person])
            users.push(person)
        console.log(users)
        alert('welcome!')
        navigate('/signin')

        }
        else{
            alert('User Already Registered!')
        }

        


    }


  return (
    <div className="form-wrapper">
    <div className="signup-form">
      <h2>Sign Up</h2>
      <form>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <i className="fas fa-user"></i>
          <input type="text" id="name" placeholder="Enter your name" required onChange={(e)=>{setInputName(e.target.value)}} />
        </div>
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
        <button onClick={register} type="submit" className="signup-btn">Register</button>
      </form>
      <span className='link-last'><Link to={'/signin'}>already have an account ?</Link></span>
    </div>
  </div>
  )
}
