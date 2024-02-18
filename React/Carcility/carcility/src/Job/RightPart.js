import React, { useState } from "react";
import './RightPart.css'
import {TbCalendarTime} from 'react-icons/tb'
import Details from '../Details.json'

import moment from 'moment'



const RightPart=()=>{

    const [state,setState] = useState()
    const [hidden,setHidden] = useState()

    const handleToday=()=>{
        setState(!state)
    }

    const handleTomorrow=()=>{
        setHidden(!hidden)
    }
    return(
        <div>
            <div className="rightdiv">
                <div className="schedule">SCHEDULE</div>
                <TbCalendarTime className="calendericon"/>

                <div className="subdiv">
                    <span className="green"></span>
                    <span className="service">Service</span>
                    <span className="blue"></span>
                    <span className="wash">Wash</span>
                    <span className="orange"></span>
                    <span className="repair">Repair</span>
                </div>

                
                <p className="today">TODAY</p>
                    {state ?Details.today.map((item)=>(
                        <div  className="time">
                        <div>
                       <span className="divtime">{moment(item.time).format("hh:mm A")} - {item.id}</span>
                       </div>
                       <div>
                       <span className="divrepair"> Etios: {item.repair}</span>
                       <div className={item.status==='wash'?"washcolorClass": item.status==='repair'?"repaircolorClass":"servicecolor"}></div>
                        </div>
                        </div>
                    )):
                    Details.today.slice(0,4).map((item)=>(
                        <div  className="time">
                        <div>
                       <span className="divtime">{moment(item.time).format("hh:mm A")} - {item.id}</span>
                       </div>
                       <div>
                       <span className="divrepair"> Etios: {item.repair}</span>
                       <div className={item.status==='wash'?"washcolorClass": item.status==='repair'?"repaircolorClass":"servicecolor"}></div>
                        </div>
                        </div>
                    ))}

                    {!state ? (
                        <p className="hiddentoday" onClick={handleToday}>+8 more</p>
                    ):(
                        <p className="hiddentoday" onClick={handleToday}>Show Less</p>
                    )}
                <div className="seconddiv">
                <p className="tomorrow">TOMORROW</p>
                    {hidden?Details.tomorrow.map((item)=>(
                        <div  className="list">
                        <div>
                       <span className="divtime">{moment(item.time).format("hh:mm A")} - {item.id}</span>
                       </div>
                       <div>
                       <span className="divrepair"> Etios: {item.repair}</span>
                       <div className={item.status==='wash'?"washcolorClass": item.status==='repair'?"repaircolorClass":"servicecolor"}></div>
                        </div>
                        </div>
                    )):
                     Details.tomorrow.slice(0,4).map((item)=>(
                        <div  className="list">
                        <div>
                       <span className="divtime">{moment(item.time).format("hh:mm A")} - {item.id}</span>
                       </div>
                       <div>
                       <span className="divrepair"> Etios: {item.repair}</span>
                       <div className={item.status==='wash'?"washcolorClass": item.status==='repair'?"repaircolorClass":"servicecolor"}></div>
                        </div>
                        </div>
                    ))}
                </div>
                
               {!hidden ? (
                <p className="hiddentomorrow" onClick={handleTomorrow}>+2 more</p>
               ):(

             <p className="hiddentomorrow" onClick={handleTomorrow}>Show Less</p>
               )}
            </div>
        </div>
    )
}

export default RightPart