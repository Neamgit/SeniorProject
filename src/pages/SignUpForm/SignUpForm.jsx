import "./SignUpForm.css"
import React, { useState } from 'react';
// import { NavLink,History, useHistory } from "react-router-dom";
import axios from 'axios';


function SignUpForm() {

    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        password: '',
        passwordConfirm: '',
        phoneNumber: '',
        dateOfBirth: '',
        gender: '',
        nationality: '',
        userType: '',
        voterId: '',
        candidateId: '',
        constituency: '',
        partyAffiliation: '',
        totalVotes: 0,
    });
    
    const handleChange = (event) => {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        });
    };
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          const response = await axios.post('http://localhost:5000/api/signup/signup', formData);
          console.log(response.data.message);
          // Redirect to login page or display success message
          console.log(response.data.message);
        // Redirect to home page
        window.location.href = '/'; // Replace with your homepage URL
        } catch (error) {
          console.log(error);
          // Display error message to user
        }
    };






    
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [loginMessage, setLoginMessage] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    // Your sign up logic here
    setShowLoginForm(true);
    setFormData({
      email: '',
      password: '',
    });
  };

  const handleLogin = async (email, password) => {
    try {
      const response = await fetch('http://localhost:5000/api/login/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      });

      const data = await response.json();
      console.log(data);
      setLoginMessage('You have successfully logged in!');
      setShowLoginForm(false);
    } catch (error) {
      console.log(error);
      setLoginMessage('Failed to log in. Please try again.');
    }
  };
    
    
    
    
    

 
    return (
      <div className="container">
        <div className="title"> Sign Up Form</div>
      
        <form onSubmit={handleSubmit} action="#">
         <div className='user-details'>
            <div className='input-box'>
              <span className='details'>Full Name</span>  
              <input type="text" name="fullname" placeholder="Full Name" onChange={handleChange} required />
            </div>
            <div className='input-box'>
              <span className='details'>Email</span>  
              <input type="email" name="email" placeholder="email" onChange={handleChange} required />
            </div>
            <div className='input-box'>
              <span className='details'>Password</span>  
              <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
            </div>
            <div className='input-box'>
              <span className='details'>Confirm Password</span>  
              <input type="password" name="passwordConfirm" placeholder="Confirm Password" onChange={handleChange} required />
            </div>
            <div className='input-box'>
              <span className='details'>Phone Number</span>  
              <input type="tel" name="phoneNumber" placeholder="Phone Number" onChange={handleChange} required />
            </div>
            <div className='input-box'>
              <span className='details'>Date Of Birth</span>  
              <input type="date" name="dateOfBirth" placeholder="Date of Birth" onChange={handleChange} required />
            </div>
{/*             
          <div className='gender-details'>
            <input type="radio" name="gender" id="dot-1"/>
            <input type="radio" name="gender" id="dot-2"/>
            <span className="gender-title">Gender</span>
             <div className='category'>
              <label htmlFor='dot-1'>
                  <span className='dot one'></span>
                  <span className='gender' name="gender" value="male">male</span>
              </label>
              <label htmlFor='dot-2'>
                  <span className='dot two'></span>
                  <span className='gender' name="gender" value="female">female</span>
              </label>
             </div>
          </div>
           */}

          <div className='input-box'>
              <span className='details'>Nationality</span>  
              <input type="text" name="nationality" placeholder="Nationality" onChange={handleChange} required />
          </div> 

          <div className='userType'>
          <label htmlFor="userType">User Type:</label>
          <select name="userType" id="userType" onChange={handleChange} required>
            <option value="">Select User Type</option>
            <option value="voter">Voter</option>
            <option value="candidate">Candidate</option>
          </select>
           </div>
          {formData.userType === 'voter' && (
            <input type="text" name="voterId" placeholder="Voter ID" onChange={handleChange} required />
          )}

          {formData.userType === 'candidate' && (
            <>
              <input type="text" name="candidateId" placeholder="Candidate ID" onChange={handleChange} required />
              <input type="text" name="constituency" placeholder="Constituency" onChange={handleChange} required />
              <input type="text" name="partyAffiliation" placeholder="Party Affiliation" onChange={handleChange} required />
            </>
          )}
          <div className='button'>
            <input type="submit" value="Sign Up"/>
          </div>
{/* 
          <button type="submit">Sign Up</button>
          <p>Already have an account? <a href="/login">Login here</a></p> */}

        </div>
        </form>

          


        <div>
      {showLoginForm ? (
        <div>
          <h2>Login</h2>
          <p>{loginMessage}</p>
          <form onSubmit={(e) => {
            e.preventDefault();
            handleLogin(formData.email, formData.password);
          }}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
            {/* <button type="submit">Login</button> */}
            <div className='button'>
            <input type="submit" value="Login"/>
          </div>
          </form>
        </div>
      ) : (
        <div>
          <h2>Login</h2>
          <form onSubmit={handleSignUp}>
            {/* Your form inputs here */}
            {/* <button type="submit">Sign Up</button> */}
          <div>
            <input type="submit" value="Login"/>
          </div>
          </form>
        </div>
      )}
    </div>


      </div>
      );

}

export default SignUpForm;

