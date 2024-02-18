import React, { useContext } from 'react'
import Component2 from './Component2'
import './Comp1.css'
import { store } from './App'


const Component1=()=>{

    const {list,timeperiod,geo,setTimePeriod,setGeo,rtm,setRtm,partnergroup,setPartnerGroup,partner,setPartner} = useContext(store)
    return(
        <div className='container'>
                <Component2 lable="Time Period" content={list.timeperiod} value={timeperiod} setTimePeriod={setTimePeriod}  />
                <Component2 lable="GEO" content={list.geo} value={geo} setTimePeriod={setGeo}/>
                <Component2 lable="RTM" content={list.rtm} value={rtm} setTimePeriod={setRtm}/>
                <Component2 lable="PartnerGroup" content={list.partnergroup} value={partnergroup} setTimePeriod={setPartnerGroup}/>
                <Component2 lable="Partner" content={list.partner} value={partner} setTimePeriod={setPartner}/>
                <Component2 lable="RTM" content={list.rtm}/>
                <Component2 lable="PartnerGroup" content={list.partnergroup}/>
                <Component2 lable="Partner" content={list.partner}/>
        </div>
    )
}

export default Component1