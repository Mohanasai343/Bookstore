import React, { useState } from 'react'
import './Comp.css'

const Component=()=>{

    const [first,setFirst] = useState([{
        firstName:'',
        lastName:'',
        Email:'',
        conformEmail:'',
        password:'',
        conformPassword:'',
    }])
    const [button,setButton] = useState(false)

    const handleFirst=(e)=>{
        setFirst(e.target.value)
        console.log(first)
    }

    const handleButton=()=>{
        setButton(!button)
    }
    return(
        <div className='outer_div'>
            <div className="contentdiv">
                <span className='subdiv'>
                <input type='text' placeholder='FIRST NAME' className='first' onChange={(event)=>handleFirst(event)}/>
                <input type='text' placeholder='LAST NAME' className='last'/>
                </span>
                <div>
                <input type='email' placeholder='EMAIL' className='email'/>
                <input type='email' placeholder='CONFORM EMAIL' className='confirm'/>
                </div>
                <input type='text' placeholder='CONTACT NUMBER' className='number'/>
                <div>
                    <input type='password' placeholder='PASSWORD' className='password'/>
                    <input type='password' placeholder='CONFORM PASSWORD' className='conform'/>
                </div>
            </div>
            <button className='submit' onClick={handleButton}>SUBMIT</button>
        </div>
    )
}

export default Component