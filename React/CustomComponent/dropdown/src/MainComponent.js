import React from 'react'
import Dropdown from './Dropdown'
import values from './Values.json'
import './MainComponent.css'

const MainComponent=()=>{
    return(
        <div className='main_div'>
            <Dropdown lable="Time Period" data={values.timeperiod}/>
            <Dropdown lable="Geo" data={values.geo}/>
            <Dropdown lable="RTM" data={values.rtm}/>
            <Dropdown lable="Partner Grouping" data={values.partnergroup}/>
            <Dropdown lable="Partner" data={values.partner}/>
            <Dropdown lable="Lob/Sub Lob" data={values.partnergroup}/>
            <Dropdown lable="Model" data={values.geo}/>
            <Dropdown lable="Compares" data={values.timeperiod}/>
            <Dropdown lable="Benchmark" data={values.partner}/>
        </div>
           )
}

export default MainComponent