import React, { useState } from 'react'
import {IoMdArrowDropdown} from 'react-icons/io'
import {TiTick} from 'react-icons/ti'
import './Comp2.css'

const Component2=({content,lable,setTimePeriod,value})=>{
    
    const [dropDown,setDropDown] = useState(false)
    const [Select, setSelect] = useState(value)
  
    const handleDropDown=()=>{
        setDropDown(!dropDown)
    }

    const handleSelect=(item)=>{
         setSelect(item)
        setTimePeriod(item)
        setDropDown(false)
    }
   
    return(
        <div>
          <b className='lable'>{lable} </b> 
            <div className='dropDown_div' onClick={handleDropDown}>
                <IoMdArrowDropdown className='down_arrow' onClick={handleDropDown}/> <span className='select'>{Select}</span>
                </div>
                {dropDown?
            <div  className='drop_down' >
            {content?.map((item)=>(
                <div
                onClick={()=>handleSelect(item)}
                className={`drop_icon${Select === item ? " " : " "}`}
                >
                     {Select === item && <TiTick className="correct"/>}
                    {item}
                    
                    </div>
            ))}
            </div>:" "}
        </div>
    )
}

export default Component2