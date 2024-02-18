import React from 'react'
import './BenchMark.css'

const BenchMark=({fill,avg,min})=>{
    return(
        <div>
                <div className='progressbar'>
                <div style={{
                    height:"100%",
                    width:`${fill>100?100:fill}%`,
                    backgroundColor:"red",
                    transition:"width 0.5s",
                }}>
               
                    <div className='average' style={{
                        left:`${avg>100?100:avg}%`,
                    }}>{avg}%</div>
                    </div>
                <div className='minmax' style={{
                    left:`${min>100?100:min}%`
                }}>{min}%</div>
                </div>
        </div>
    )
}

export default BenchMark