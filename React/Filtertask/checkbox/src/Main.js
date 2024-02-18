import React from 'react'
import City from './City.json'

const Main = () =>{
    return(
        <div>
            <input type="checkbox"/>
            <span>All</span>

            <input type="checkbox"/>
            <span>Gym</span>

            <input type="checkbox"/>
            <span>Pool</span>

            <input type="checkbox"/>
            <span>Store</span>

            <input type="checkbox"/>
            <span>Playground</span>

            <div className='blocks'>           
            {City.map((item)=>(
                <div >
                  <div className='cards'>BLOCK:<b>{item.TIME_PERIOD}</b></div>  
                </div>
            ))}
             </div> 
        </div>
    )
}

export default Main