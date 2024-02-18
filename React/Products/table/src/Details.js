import React, { useState } from "react";
import moment from 'moment'
import Footer from "./Footer";
import './Details.css'

const Details = ({update}) =>{

    const [page,setPage] = useState(10)
    const [startingPage,setStartingPage] = useState({starting:0,ending:page})
     

    const handlePage=(starting,ending)=>{
        setStartingPage({
            ending:ending,
            starting:starting,
        })
    }

    // const handlePage=(starting,ending)=>{
    //     setStartingPage({
    //         startingPage:starting
    //     })
    //     setEndingPage({
    //         endingPage:ending
    //     })
    // }
    return(
        <div>

        <div className="titles">
            <span>Tracking ID</span>
            <span>Product</span>
            <span>Price</span>
            <span>Category</span>
            <span>Created At</span>
            <span>Updated At</span>
            <span>Description</span>
            </div>
            <div >
            {update.slice(startingPage.starting,startingPage.ending).map((item)=>(
                <div className={item.id%2===0?"ta1":"ta2"}>
                <span className="tracking"> #{item.id}</span>  
                <span className="names">{item.title}</span> 
                <span>${item.price}</span>
                <span className={item.category.name==="Shoes"?"shoes":item.category.name==="Electronics"?"elect":item.category.name==="Clothes"?"clothes":item.category.name==="Others"?"others":""}>{item.category.name}</span>
                <span>{moment(item.creationAt).format("DD/MM/YYYY")}</span>
                <span>{moment(item.updatedAt).format("DD/MM/YYYY")}</span>
                <span className="description">{item.description}</span>
                </div>
            ))}
        </div>
        <Footer page={page} total={update.length} handlePage={handlePage} startingPage={startingPage}/>
        </div>
        
    )
} 

export default Details