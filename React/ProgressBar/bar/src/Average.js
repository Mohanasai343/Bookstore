import React,{useState} from "react";
import BenchMark from "./BenchMark";

const Average=()=>{
    
    const [fill,setFill] = useState(0)
    const [avg,setAvg] = useState(0)
    const [min,setMin] = useState(0)

    const handleChange=(e)=>{
        const {value} = e.target
        setFill(value === "" ? 0 : value )
     }

    const handleAvg=(e)=>{
        const {value} = e.target
        setAvg(value === "" ? 0 : value)
    }

    const handleMin=(e)=>{
        const {value} = e.target
        setMin(value === "" ? 0 : value)
    }
    return(
        <div>
            <div>
              <input type='text'   onChange={(e)=>handleChange(e)}/>
            </div>

            <div>
                <input type="text" onChange={(e)=>handleAvg(e)}/>
            </div>

            
            <div>
                <input type="text" onChange={(e)=>handleMin(e)}/>
            </div>

               <BenchMark fill={fill} setFill={setFill} avg={avg} setAvg={setAvg} min={min}/>
        </div>

    )
}

export default Average