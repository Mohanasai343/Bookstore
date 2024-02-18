import React, { useState } from "react";

import './Filter.css'

const Filter = ({listData, setListData, result}) => {

    const [min, setMin] = useState()
    const [max, setMax] = useState()
    const [filterTitle, setFilterTitle] = useState() 
    const [filterAuthor, setFilterAuthor] = useState()

    const handleTitle = (e) => {
        setFilterTitle(e.target.value)
    }

    const handleAuthor = (e) => {
        setFilterAuthor(e.target.value)
    }

    const handleMin = (e) => {
        setMin(e.target.value)
    }

    const handleMax = (e) => {
        setMax(e.target.value)
    }

    const range = (start, stop, step) => Array.from({length: stop-start/step+1},((item,i)=>start +i * step));

    const handleFilter = () => {
        if(min && max){
       const values = range(parseInt(min), parseInt(max), 1)
       const arr = listData.filter(item => values.includes(parseInt(item.price)))
       setListData(arr)
        }
        else{
            setListData(result)
        }
         if(filterTitle){
            const arr1 = listData.filter((person,i) => (person.title === filterTitle))
            setListData(arr1)
        }
        if(filterAuthor){
            const arr2 = listData.filter((writer,i) => (writer.author === filterAuthor))
            setListData(arr2)
        }

    }

    return(
        <div className="price">
            <span>
                <input placeholder="Enter title" className="filter_title" onChange={handleTitle} value={filterTitle}></input>
                <input placeholder="Enter Author" className="filter_author" onChange={handleAuthor} value={filterAuthor}></input>
            </span>
        <span className="price_icon"><b>₹</b></span>
    <input placeholder="Min" className="min_price" maxLength="4" onChange={(e)=>handleMin(e)} value={min}></input>
    <span  className="price_icon"><b>₹</b></span>
    <input placeholder="Max"  className="max_price" maxLength="4" onChange={(e)=>handleMax(e)} value={max}></input> 
    <button className="search" onClick={handleFilter}><b>Go</b></button>
    </div>
    )
}

export default Filter 