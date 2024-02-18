import React, { useState } from "react";

import Quaterly from './YearQtr/Quaterly'
import Weekly from "./YearQtrWeek/Weekly";

import './MainComp.css'

const MainComp = ({ setButton }) => {

    const [qtrly, setQtrly] = useState(true)
    const [week, setWeek] = useState(false)
    const [select, setSelect] = useState([])
    const [matter, setMatter] = useState()
    const [qtrData, setQtrData] = useState()

    const handleChange = () => {
        setQtrly(true)
        setWeek(false)
    }

    const handleWeek = () => {
        setWeek(true)
    }

    const handleX = () => {
        setButton(false)
    }

    const handleSelect = () => {
        let arr = [...select]
        arr.push({
            ...matter,
            ...qtrData

        })
        setSelect(arr)


    }
    console.log(select)
    return (
        <div>
            <div className='container'>
                <div className="text_x" onClick={handleX}>x</div>
                <div className="bothComp">
                    <span><div className='header'>
                        <h2 onClick={handleChange}>{qtrly && !week ? <span className='quaterly'>Quaterly</span> : <span className='quaterly1'>Quaterly</span>}</h2>
                    </div><Quaterly qtrly={qtrly} setQtrly={setQtrly} week={week} setWeek={setWeek} select={select} setSelect={setSelect} matter={matter} setMatter={setMatter} qtrData={qtrData} setQtrData={setQtrData} /></span>
                    <span>     <div className='header'>
                        <h2 onClick={handleWeek}>{week && qtrly ? <span className='weekly'>Weekly</span> : <span className='weekly1'>Weekly</span>}</h2>
                    </div><Weekly week={week} setWeek={setWeek} setQtrly={setQtrly} qtrly={qtrly} /></span>
                </div>
                <div className="footer">
                    <button className="cancel" onClick={handleX}>Cancel</button>
                    <button className="apply" onClick={handleSelect}>Apply</button>
                </div>
            </div>
        </div>
    )
}

export default MainComp