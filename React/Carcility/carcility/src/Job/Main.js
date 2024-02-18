import React from 'react'
import LeftPart from './LeftPart'
import RightPart from './RightPart'
import Top from './Top'


const Main = () =>{
    return(
        <div className='main'>
            <LeftPart/>
            <RightPart/>
            <Top/>
        </div>
    )

}

export default Main