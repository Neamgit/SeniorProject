import "./App.css";
import React, {useEffect,useState} from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";

import Login from "./pages/Login/Login";

//components
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";

//pages
import Dashboard from "./pages/Dashboard/Dashboard";
import SignUpForm from "./pages/SignUpForm/SignUpForm";
import NewElection from "./pages/NewElection/NewElection";
import AllCandidates from "./pages/AllCandidates/AllCandidates";
import VoteNow from "./pages/VoteNow/VoteNow";

function App() {
 return (
    // <div>{data}</div>
    <BrowserRouter>
        <Header/>
          <div className='app-container'>
        <SideBar/>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path="/signupform" element={<SignUpForm/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/newelection" element={<NewElection/>}/>
          <Route path="/allcandidates" element={<AllCandidates/>}/>
          <Route path="/votenow" element={<VoteNow/>}/>
        </Routes>
        </div>
    </BrowserRouter>
  )
}

export default App;
