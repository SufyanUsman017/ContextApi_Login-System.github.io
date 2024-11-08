import React, { useEffect } from 'react'
import '../components/UserProfile.css'
import useData from '../hooks/useData'
import { Link, useNavigate } from 'react-router-dom';



function UserProfile() {


  const navigate = useNavigate();
  const {users,setUsers,loginUser} = useData();

  const loginFound =  users.find((items)=> items.userName)

  // if(loginFound){
  //   console.log(loginFound.name)
  // }
  // else{
  //   ('Not FOund')
  // }

useEffect(()=>{ 
  if(loginUser=='')
 navigate('/home')
},[])




  return (
    <div>
      {
        loginFound ? <div className="card-wrapper">
        <div className="profile-card">
          <img src={loginFound.profileURL}/>
          <h1>{loginFound.name}</h1>
        </div>
      </div> : <h1>Not FOund</h1>
      }
    </div>
  )
}

export default UserProfile
