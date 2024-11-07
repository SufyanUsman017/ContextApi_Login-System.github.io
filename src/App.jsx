import React from 'react'
import Navbar from './components/Navbar'
import SignUp from './components/Signup'
import SignIn from './components/Signin'
import UserProfile from './components/UserProfile'
import NotFound from './components/NotFound'
import Home from './components/Home'
import About from './components/About'
import Catagory from './components/Catagory'
import { Route, Routes } from 'react-router-dom'







function App() {

  return (
    
      <>
      
      <Navbar/>

      <Routes>
        <Route path='/' element={<h2>I am a Home</h2>}  />
        <Route path='home' element={<Home/>}  />
        <Route path='about' element={<About/>}  />
        <Route path='catagory' element={<Catagory/>}  />
        <Route path='signup' element={<SignUp/>}  />
        <Route path='signin' element={<SignIn/>}  />
        <Route path='profile' element={<UserProfile/>}  />
        <Route path='*' element={<NotFound/>}  />

      </Routes>




      
      
      
      
      
      
      
      


      </>
  )
}

export default App
