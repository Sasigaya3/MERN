import React, { useState } from 'react'
import {Link} from "react-router-dom"
import style from "./Login.module.css"
import {useNavigate} from "react-router-dom"
const Login = () => {
  const[email,setemail]=useState();
  const[password,setpassword]=useState();
  const navigate =useNavigate();
  
  const onSubmit=async(e)=>{
    e.preventDefault()
    try{
      const sendSign=await fetch(`http://localhost:3000/user/login`,{
        method:"POST",
        headers:{
          'content-Type':"application/json"
        },
        body:JSON.stringify({email,password}),
      });
      const response=await sendSign.json();


      if(sendSign.ok){
        alert("Login Successfull");
        localStorage.setItem("token",response.token)
        navigate('/Homepage')
      }else{
        alert("Login Failed");
      }
    }catch(error){
       console.log(error);
    }
  };
  return (
    <div className={style.body}>
      <div>
        <h1 className= {style.hello}>Login</h1>
         <div calssName={style.inside}>
            <input className={style.inp}type="email"name="email"id=""placeholder="Email" onChange={(e)=>setemail(e.target.value)} /> <br /><br />
            <input className={style.inp} type="password"name="password"id=""placeholder="Password" onChange={(e)=>setpassword(e.target.value)} /> <br /><br />
            <button className={style.but} onClick={onSubmit}>Login</button>
         </div>
         <div className={style.outside}>
            <p>don't have an account?
                 <Link to="/signup"className={style.sign}>Signup</Link>
            </p>
         </div>
      </div>

    </div>
  );
};

export default Login;
