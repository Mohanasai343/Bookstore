import React, { useState } from "react";
import Quaterly from "../YearQtr/Quaterly";
import data from '../Data.json'
import './Weekly.css'

const Weekly=({week, setWeek, qtrly, setQtrly})=>{

    const [weekData, setWeekData] = useState(data)


    return(
        <div>
            {week &&
            <>
            <Quaterly/>
            <div className="divweek">
                 <p className="weektext">Weekly</p>
                {weekData.weekData.map((item)=>(
                    <div className="weekcontent">{item.week}</div>
                ))}
            </div>
            </> }
        </div>
    )
}
export default Weekly