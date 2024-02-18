import React from 'react'
import {HiOutlineMail} from 'react-icons/hi'
import {RiLockPasswordLine} from 'react-icons/ri'
import {AiOutlineEye} from 'react-icons/ai'
import './Login.css'

const LoginFile=()=>{
    return(
        <div>
            <div className='container'>
                <span className='welcome'>Welcome back!</span>
                <p className='text'>Start managing your finance faster and better</p>
                <div className='maildiv'>
                <HiOutlineMail className='mailicon'/><input type='text' className='email'  placeholder='you@example.com'/>
            </div>
            <p></p>
            <div className='passworddiv'>
                <RiLockPasswordLine className='passwordicon'/><input type='password' className='password'  placeholder='At least 8 characters'/><AiOutlineEye className='hide'/>
            </div>
            <p></p>
            <b className='forgot'>Forgot password ?</b>
            <p></p>
            <div className='logindiv'>
                <p className='logintext'>Login</p>
            </div>
            <p className='ortext'>or</p>
            </div>
        </div>
    )
}

export default LoginFile