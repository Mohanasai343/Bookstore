import React, { useState } from "react";
import {FiChevronDown} from 'react-icons/fi';
import {RxCross2} from 'react-icons/rx'
import './Colours.css'

const Colours=()=>{

    const [options, setOptions] = useState([
        {value:'red',lable:'red', selected: false},
        {value:'pink',lable:'pink', selected: false},
        {value:'orange',lable:'orange', selected: false},
        {value:'yellow',lable:'yellow', selected: false},
        {value:'blue',lable:'blue', selected: false},
        {value:'green',lable:'green', selected: false}
    ])

    const [select, setSelect] = useState([])
    const [dropDown,setDropDown] = useState(false)

    const handleClick=()=>{
        setDropDown(true)
    }

    const handleSelect=(item,index)=>{
            const arr=[...options]
            arr[index] = {...arr[index], selected: true}
            setOptions(arr)
    }

    const handleDel=(i)=>{
        const arr=[...options]
        arr[i] = {...arr[i], selected:false}
        setOptions(arr)
    }
    const handleClear=(i)=>{
        const arr=[...options]
        arr.map(item => {
            item.selected = false;
            return item
        })
        setOptions(options)
    }

    const handleSearch = () => {
        
    }


    return(
        <div>
            <div className="box" onClick={()=>handleClick()}>
                {options.map((item,i)=>(
                   item.selected ? <div className="subdiv">{item.lable} <RxCross2 className="delete" onClick={()=>handleDel(i)}/></div> : null
                    
                ))}
                {!options.filter(item => item.selected).length<=0?
                <RxCross2 className="clear" onClick={(i)=>handleClear(i)}/>:""}
                <FiChevronDown className="downarrow"/>
                {dropDown?
                <div className="mapitems">
                    <input type="text" className="search" placeholder="Search..." onChange={handleSearch}/>
                    {options.map((item, index)=>(
                        <div className="items" onClick={()=>handleSelect(item, index)}>{item.lable}</div>
                    ))}
                </div>:""}
            </div>
        </div>
    )
}

export default Colours