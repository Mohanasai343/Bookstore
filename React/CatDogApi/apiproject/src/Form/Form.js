import React from "react";
import './Form.css'

const Form = () => {
    return (
        <div className="formhead">
            <div className="formcontainer">
                <p className="breed">Breed :</p>
                <select className="dropdown">
                    <option>Dog</option>
                    <option>Cat</option>
                </select>
                <p className="name">Name :</p>
               <input type="text" placeholder="Animals Name and Id" className="text" />
                <input type="file" className="file"/>
                <button className="submit">Submit</button>
            </div>
        </div>
    )
}

export default Form
