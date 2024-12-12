import React,{useState} from 'react';
import {Link} from "react-router-dom";
import style from "./Signup.module.css";
import {useNavigate} from "react-router-dom"
const Signup = () => {
  const[name,setname]=useState();
  const[email,setemail]=useState();
  const[password,setpassword]=useState();
  const navigate =useNavigate();


  const onSubmit=async(e)=>{
    e.preventDefault()
    try{
      const sendSign=await fetch(`http://localhost:3000/user/signup`,{
        method:"POST",
        headers:{
          'content-Type':"application/json"
        },
        body:JSON.stringify({name,email,password}),
      });
      const response=await sendSign.json();


      if(sendSign.ok){
        alert("Registartion Successfull");
        console.log(response);
        navigate('/')
      }else{
        alert("Registration Failed");
      }
    }catch(error){
       console.log(error);
    }
  };
  return (
    <div className={style.body}>
      <h1 className={style.hello} >Signup</h1>
      <div>
        <input className={style.inp}  type="name" name=""  id="" placeholder="name" onChange={(e)=>setname(e.target.value)}/><br /><br />
        <input className={style.inp} type="email" name=""  id="" placeholder="email" onChange={(e)=>setemail(e.target.value)}/><br /><br />
        <input className={style.inp} type="password" name=""  id="" placeholder="password" onChange={(e)=>setpassword(e.target.value)} /><br /><br />
        <button className={style.but} onClick={onSubmit}>Submit</button>
      </div>
      <div  className={style.outside}>
      <p>Already have an account?
      <Link to="/"className={style.sign} >Login</Link>
      </p>
      </div>
    </div>
  );
};

export default Signup;
