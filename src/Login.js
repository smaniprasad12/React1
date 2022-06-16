import logo from './logo.svg';
import React from 'react';
import './App.css';
import Input from "./components/InputField"
import Button from "./components/Button"
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Registration from './Registration';


const Login =(props)=> {

  const router = useNavigate()
  const loginKey = {
    email:"mani@gmail.com",
    password:"m@1111"
  }
 
  const [LoginCredentials,setLoginCredentials]= useState({
      email:"",
      password:""
  })

  const onSubmit = ()=>{
      if(LoginCredentials.email!==loginKey.email){
          alert("No user found")
          return;
      }
      if(LoginCredentials.password!==loginKey.password){
          alert("Password is wrong")
          return;
      }
      else{
        router("/Dashboard")
      }
     
  }

  const routeTo =()=>{
    router("/Registration")
  }

  return (
    <div className="App">

     <h1>Login Page</h1>

     <div>

     </div>
      <Input
        label="Email"
        value={LoginCredentials.email}
        onChange={(e)=>setLoginCredentials({...LoginCredentials,email:e.target.value})}
      />
      <br/>
      <br/>
      <Input
        label="Password"
        value={LoginCredentials.password}
        onChange={(e)=>setLoginCredentials({...LoginCredentials,password:e.target.value})}
      />
      <br/>
      <br/>
  
     <Button
       onClick={onSubmit}
       text="Login"
     />
     <p>New user?</p>
     <Button
       onClick={routeTo}
       text="Register"
     />

    </div>
  );
}

export default Login;
