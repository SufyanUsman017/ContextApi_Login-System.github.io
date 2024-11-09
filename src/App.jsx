import React from "react";
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import UserProfile from "./components/UserProfile";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import About from "./components/About";
import Catagory from "./components/Catagory";
import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="catagory" element={<Catagory />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="profile" element={<UserProfile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
