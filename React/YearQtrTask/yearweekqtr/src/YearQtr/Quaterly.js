import React, { useState } from 'react'
import data from '../Data.json'
import { TiTick } from 'react-icons/ti'
import './Quaterly.css'

const Quaterly = ({week, setWeek, qtrly,setQtrly,select,setSelect,matter,setMatter,qtrData,setQtrData}) => {

    const [content, setContent] = useState(data)



    return (
        <div>
            {qtrly &&
            <div className='yearquater'>
                <span>
                    <p className='Year'>Year</p>
                    {content.yearData.map((item) => (
                        <div className='yearsmap' onClick={()=>setMatter(item)}>
                        {matter === item && <TiTick/>}
                        {item.year}
                        </div>
                    ))}
                </span>
                <hr></hr>
                <span>
                    <p className='Quarter'>Quarter</p>
                    {content.quaterData.map((item) => (
                        <div className='quatersmap' onClick={()=>setQtrData(item)}>
                              {item.quater}
                              {qtrData === item && <TiTick/>}
                        </div>
                    ))}
                </span>
            </div> }
        </div>
    )
}

export default Quaterly