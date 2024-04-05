import React from 'react'
import { useState } from 'react'
import './Loginsignup.css'
import user_icon from '../Assests/person.png'
import email_icon from '../Assests/email.png'
import password_icon from '../Assests/password.png'

const Loginsignup = () => {
  const[action,setAction]=useState("Sign Up");
  return (
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
      <div className="inputs">
     {action==="Login"?<div></div>:<div className="input">
            <img src={user_icon} alt="" />
            <input type="text" placeholder="Name"/>
        </div>}
        
        <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" placeholder="Email Id" />
        </div>
        <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder='password'/>
        </div>
        {action==="Sign Up"?<div></div>:<div className="forgot-password">forgot password ?? <span> Click here !</span></div>}
        <center>
        <div className="submitcontainer">
        <div className='submit'>
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
             <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
             </div>
        </div>
        </center>
      </div>
    </div>
    
  )
}

export default Loginsignup
