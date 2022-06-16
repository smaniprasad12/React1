
import './Registration.css';
import Input from "./components/InputField"
import Button from "./components/Button"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Registration() {

  const router = useNavigate()

  const [RegistrationObject,setRegisterObject] = useState({
      firstname:"",
      lastname:"",
      email:"",
      password:"",
      username:"",
      phonenumber:""
  })


  const nameValdiate=(text)=>{
    var regex = /^[a-zA-Z]{1,51}$/
    return regex.test(text)
  }

  const usernameValidate = (text)=>{
    var regex = /^[a-zA-Z]{5,51}$/
    return regex.test(text)
  }

  const passwordValidate=(text)=>{
    var regex =/^(?=\D*\d)(?=.*?[a-zA-Z]).*[\W_]/
    return regex.test(text)
  }
  const emailValidate =(text)=>{
    var regex=/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/
    return regex.test(text)
  }

  const validation =()=>{
    if(!nameValdiate(RegistrationObject.firstname)){
      alert("First Name is not valid")
    }
    if(!nameValdiate(RegistrationObject.lastname)){
      alert("Last Name is not valid")
    }
    if(!passwordValidate(RegistrationObject.password)){
      alert("Password  is not valid")
    }
    if(!usernameValidate(RegistrationObject.username)){
      alert("UserName is not valid")
    }
    if(!emailValidate(RegistrationObject.email)){
      alert("Email is not valid")
    }
    if(RegistrationObject.phonenumber.length!==10){
      alert("Invalid phone number")
    }
    else{
      router("/Dashboard")
    }
    
  }

  const reset =()=>{
    setRegisterObject({
      firstname:"",
      lastname:"",
      email:"",
      password:"",
      username:"",
      phonenumber:""
    })
  }
  return (
    <div className="App">
      <div className='container'>
      <h2>Registration Page</h2>
      <Input
        label="Firstname"
        value={RegistrationObject.firstname}
        onChange={(e)=>setRegisterObject({...RegistrationObject,firstname:e.target.value})}
      />
      <br/>
      <br/>
     <Input
        label="Lastname"
        value={RegistrationObject.lastname}
        onChange={(e)=>setRegisterObject({...RegistrationObject,lastname:e.target.value})}
      />
       <br/>
       <br/>
      <Input
       label="Email"
       value={RegistrationObject.email}
       onChange={(e)=>setRegisterObject({...RegistrationObject,email:e.target.value})}
     />
      <br/>
      <br/>
     <Input
       label="Phonenumber"
       value={RegistrationObject.phonenumber}
       onChange={(e)=>setRegisterObject({...RegistrationObject,phonenumber:e.target.value})}
     />
      <br/>
      <br/>
     <Input
       label="Username"
       value={RegistrationObject.username}
       onChange={(e)=>setRegisterObject({...RegistrationObject,username:e.target.value})}
     />
      <br/>
      <br/>
     <Input
       label="Password"
       value={RegistrationObject.password}
       onChange={(e)=>setRegisterObject({...RegistrationObject,password:e.target.value})}
     />
      <br/>
      <br/>
     <Button
       onClick={validation}
       text="Register"
     />
      <br/>
      <p>or</p>
      <Button
       onClick={reset}
       text="Reset"
     />
      </div>
     
    </div>
  );
}

export default Registration;
