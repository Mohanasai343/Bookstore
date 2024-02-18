import axios from "axios";
import React, { useEffect, useState } from "react";
import '../Header.css'

const Cat = () => {
    const [cat, setCat] = useState([])

    useEffect(() => {
        axios
        .get(" https://api.thecatapi.com/v1/images/search?limit=10")
        .then((res) => setCat(res.data))
        .catch((err)=>{
            console.log(err)
        })
    },[])
    return(
        <div className="dogmain">
            {cat.map((item) => (
                <div className="container">
                <div>
                   <div><img src={item.url} alt=""  className="images"/> {item.id}</div> 
                </div>
                <button className="fav">Favourite</button>
                </div>
            ))}
        </div>
    )
}

export default Cat