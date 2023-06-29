// import React from 'react'
import "./Header.css";
import {useNavigate} from "react-router-dom";


function Header() {
  const navigate = useNavigate();

  return (
    <div className='header-container'>
        <h1>Election website</h1>

        <div className='sidebar-item' onClick={() => navigate("/signupform")}>
                signup
        </div>
        <div className='sidebar-item' onClick={() => navigate("/login")}>
                Login
        </div>
    </div>
  )
}

export default Header;