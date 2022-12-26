import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../Redux/AuthReducer/Action';

const Login = () => {

    const dispatch=useDispatch();

    const [Email,setEmail]=useState("test@test.com");
    const [Password,setPassword]=useState("Test@123")

    const Handelclick=()=>{
        let  loginData={
            user_email:Email,
            user_password: Password
        }
        dispatch(login(    loginData    ))
    }
  return (
    <div>
        <input type="email" placeholder='Enter Email' value={Email} onChange={(e)=>(setEmail(e.target.value))}></input>
        <input type="password" placeholder='Enter Password' value={Password} onChange={(e)=>(setPassword(e.target.value))} />
        <button onClick={Handelclick}>Login</button>
    </div>
  )
}

export default Login