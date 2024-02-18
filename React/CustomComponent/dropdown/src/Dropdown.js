import React, { useState  } from "react";
import { BiCaretDown } from 'react-icons/bi'
import {TiTick} from 'react-icons/ti'
import './Dropdown.css'


const Dropdown = ({ data, lable }) => {
    const [store, setStore] = useState(false)
    const [Select, setSelect] = useState(" ")
    
    const handleClick = () => (
        setStore(!store)
    )
    const handleitem = (item) => {
        setSelect(item)
        setStore(false)
    }

    return (
        <div className="container">
            <span className="lable">{lable}</span>

            <div     className="box" onClick={handleClick}  ><span className="select">{Select}</span>
                <span className="icon"><BiCaretDown /></span>
            </div>
            {store ?
                <div className="items">
                    {data.map((item) => (
                        <div 
                        onClick={() => handleitem(item)}
                        className={`drop_icon${Select === item ? " " : " "}`}
                     >
                           {Select === item && <TiTick className="correct"/>} {item}   
                        </div>
                    ))}
                </div> : null}
        </div>
    )
}

export default Dropdown