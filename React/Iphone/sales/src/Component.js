import React, { useState } from 'react'
import data from './Phone.json'
import Heading from './Headings'
import './Component.css'

const Component=()=>{

    const [details,setDetails] = useState(data.Accessories)
  
    return(
        <div>
            <h3>Sell Through Mix by Category</h3>
            <div style={{display:"flex"}}>
            <div>
            <div className='header' >
                <div>
             <p className='st_ub'>ST/UB<p className='millions'>(Millions)</p></p>
             </div>
             </div> 
            
           {Object.keys(details).map((key)=>(
            <table className='main_row'>
                <tr>
                    {key}
                    <hr></hr>
                </tr>
             </table>
           ))}
             </div>
           <div  className='scroll'>
            <span className='head'><Heading/></span>
        </div>
        </div>
        </div>
    )
}

export default Component