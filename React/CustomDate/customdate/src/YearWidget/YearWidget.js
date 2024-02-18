import React from "react";

import { MdCancel } from 'react-icons/md'

import './YearWidget.css'

const YearWidget = ({ data }) => {
    return (
        <div className="body_box">
            <p className="consecutive">Select up to 3 Consecutive Years (1/3) </p>
            <div className="selected_items">
                <>
                    <MdCancel />
                </>
            </div>
            <div className="year_selection">
                <span className="year_text">Year</span>
                {data.map((item) => (
                    <span className="years_list">{item.year}</span>
                ))}
            </div>
        </div>
    )
}

export default YearWidget