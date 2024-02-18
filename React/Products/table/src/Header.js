import React, { useEffect, useState } from "react";
import {BsSearch} from 'react-icons/bs'
import {AiOutlineDown} from 'react-icons/ai'
import './Header.css'


const Header=({update,setUpdate})=>{

    const [product,setProduct] = useState(false)
    const [price,setPrice] = useState(false)
    const [category,setCategory] = useState(false)
    const [description,setDescription] = useState(false)
    const [all,setAll] = useState(false)
    const [click,setClick] = useState(false)
    const [hide,setHide] = useState(false)


    useEffect(()=>{
        if(product&&price&&description&&category){
            return setAll(true)
        }else{
            return setAll(false)
        }
    },[product,price,category,description])
    const handleSelect=(e)=>{
        setAll(e.target.value)
        setAll(!all)
        setProduct(true)
        setPrice(true)
        setCategory(true)
        setDescription(true)
    }


    const handleDisselect=(e)=>{
        setAll(e.target.value)
        setAll(!all)
        setProduct(false)
            setPrice(false)
            setCategory(false)
            setDescription(false)
    }

    const handleClick = () =>{
        setClick(!click)
        setHide(!hide)
    }

    const handleChange=(e)=>{
        let arr=[...update]
        let arr1=arr.filter((item)=>item.title.toLowerCase().includes(e.target.value))
        setUpdate(arr1)

    }
    return(
        <div>
            <div className="head">
                 <span className="show">Show</span>
                 <select className="mini">
                    <option className="number">10</option>
                    <option>20</option>
                    <option>30</option>
                 </select>
                 <span className="entries">entries</span>
                 <input type="text" className="search" placeholder="Search..." onChange={handleChange}></input>
                 <BsSearch className="search_icon"/>
                <span>
                 <a onClick={handleClick} className="filter">Filter <AiOutlineDown className="down_arrow" onClick={handleClick}/></a> 
                 </span>
                 {hide?
                 <div className="filter_drop_down">
              {!all?   
                   <p> 
                <input type="checkbox" checked={all}  onClick={handleSelect} className="selectall"/>SelectAll
                     </p>:
                     <p>
                 <input type="checkbox" checked={all}  onClick={handleDisselect}/>SelectAll
                    </p>}
                 <p><input type="checkbox" checked={product} onClick={(e)=>{setProduct(e.target.checked)}}/>Product</p>
                 <p><input type="checkbox" checked={price} onClick={(e)=>{setPrice(e.target.checked)}}/>Price</p>
                 <p><input type="checkbox" checked={category} onClick={(e)=>{setCategory(e.target.checked)}}/>Category</p>
                 <p><input type="checkbox" checked={description} onClick={(e)=>{setDescription(e.target.checked)}}/>Description</p>
                 </div>
:""}
            </div>
        </div>
    )
}

export default Header