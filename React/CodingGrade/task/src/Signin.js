import React from 'react'
import './Signin.css'

const Signin=()=>{
    return(
        <div>
            <div className='container'>
                <div>
                    <h1 className='sign'>SIGN IN</h1>
                    <div>
                        <p>Username : </p>
                <input type='text' className='user' placeholder='Username'/>
                </div>
                </div>
                <div>
                    <p>Password : </p>
                    <input type='password' className='password' placeholder='Password'/>
                </div>
            </div>
        </div>
    )
}

export default Signin