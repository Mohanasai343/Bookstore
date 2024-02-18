import React, { useContext } from 'react'
import './Context.css'
import {TiDelete} from 'react-icons/ti'
import { store } from './App'


const Context=()=>{
   const {timePeriod,setTimePeriod,geo,setGeo,rtm,setRtm,partnergroup,setPartnerGroup,partner,setPartner} = useContext(store)
  
    const handleDeleteAll=()=>{
        setTimePeriod(" ")
        setGeo(" ")
        setRtm(" ")
        setPartnerGroup(" ")
        setPartner(" ")
    }

   const handleDeletetime=()=>{
    setTimePeriod(" ")
}

    const handleDeletegeo=()=>{
        setGeo(" ")
    }

    const handleDeletertm=()=>{
        setRtm(" ")
    }

    const handleDeletegroup=()=>{
        setPartnerGroup(" ")
    }

    const handleDeletepartner=()=>{
        setPartner(" ")
    }
  
   return(
        <div className='main'>
            <div className='sub_div'>
          {timePeriod !== " " && 
                <div>
                  <div className='styling'> {timePeriod} <TiDelete className='delete' onClick={handleDeletetime}/></div> 
                </div>}
          {geo !==" " &&
                 <div >
                   <div className='styling'> {geo} <TiDelete className='delete' onClick={handleDeletegeo}/></div>
                </div>}
          {rtm !==" " && 
                <div  >
                   <div className='styling'>{rtm} <TiDelete className='delete' onClick={handleDeletertm}/></div> 
                </div>}
         {partnergroup !== " " && 
                 <div >
                   <div className='styling'>{partnergroup} <TiDelete className='delete' onClick={handleDeletegroup}/></div> 
                 </div>}
          {partner !== " " && 
                <div >
                    <div className='styling'>{partner} <TiDelete className='delete' onClick={handleDeletepartner}/></div>
                </div>}
           </div>
           <TiDelete onClick={handleDeleteAll} className='alldelete'/>
        </div>
    )
}

export default Context