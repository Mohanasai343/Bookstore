import React, { useState } from "react";
// import Pagination from "./Pagination";
import './Footer.css'
import { useEffect } from "react";

const Footer=({handlePage,page,total,startingPage})=>{
    const [counter,setCounter] = useState(1)    
    const [num,setNum] = useState(Math.ceil(total/page))

    useEffect(()=>{
        const value = page*counter;
        handlePage(value-page,value)
    },[counter])

    const handlePrev=(item)=>{
        if(item==="Next"){
            setCounter(counter+1)
        }else if(counter===1){
            setCounter(1)
        }else{
            setCounter(counter-1)
        }
    }

    return(
        <div>
            <div className="footer">
                <a  className="previous" onClick={()=>handlePrev("Prev")} >Previous</a>
                {/* <div className="pages">
               {new Array(num).fill("").map((item,index)=>(
                <button onClick={()=>setCounter(index+1)} disabled={counter===num-1}>{index+1}</button>
               ))} */}

               {counter}
                {/* </div> */}
                <a   className="next" onClick={()=>handlePrev("Next")} disabled={startingPage===num-1}>Next</a>
            </div>
            {/* <Pagination/> */}
        </div>
    )
}

export default Footer