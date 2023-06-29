import "./SideBar.css";
import {useNavigate} from "react-router-dom";

// import React from 'react'

function SideBar() {
    const navigate = useNavigate();
  
  return (
    <div className='sidebar-container'>
        <div className='sidebar-item' onClick={() => navigate("/")}>
                OverView
        </div>
        <div className='sidebar-item' onClick={() => navigate("/votenow")}>
                Vote Now
        </div>
        <div className='sidebar-item' onClick={() => navigate("/newelection")}>
                New Election
        </div>
        <div className='sidebar-item' onClick={() => navigate("/allcandidates")}>
                All Candidates
        </div>
    </div>
  )
}

export default SideBar