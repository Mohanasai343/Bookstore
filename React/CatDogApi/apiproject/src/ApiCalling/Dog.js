import axios from "axios";
import React, { useEffect, useState } from "react";
import '../Header.css'

const Dog = ({addFav,setAddFav}) => {
    const [dog, setDog] = useState([])

    useEffect(() => {
        axios
        .get(" https://api.thedogapi.com/v1/images/search?limit=10")
        .then((res) => setDog(res.data))
        .catch((err)=>{
            console.log(err)
        })
    },[])

    const handleAddtoFav = (item) => {
        let arr = [...addFav]
        arr.push(item)
        setAddFav(arr)
    }   
     return(
        <div className="dogmain">
            {dog.map((item) => (
                <div className="container">
                <div>
                   <div><img src={item.url} alt=""  className="images"/> {item.id}</div> 
                </div>
                <button className="fav" onClick={()=>handleAddtoFav(item)}>Favourite</button>
                </div>
            ))}
        </div>
    )
}

export default Dog