import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Details from './Details'
import Header from './Header'
const Component=()=>{

    const [content,setContent] = useState([])
    const [update,setUpdate] = useState([])

    useEffect(()=>{
    
        axios
        .get('https://api.escuelajs.co/api/v1/products?offset=0&limit=50')
        .then((res)=>{
       console.log(res)
             setContent(res.data)
             setUpdate(res.data)
    })
        .catch((err)=>(console.log(err)))
    },[])
    return(
        <div className='container' >
            <Header update={update} setUpdate={setUpdate}/>
            <Details
            content={content} update={update}
            />

        </div>
    )
}

export default Component