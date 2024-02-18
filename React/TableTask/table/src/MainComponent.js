import React, { useState } from 'react'

import './Main.css'

const MainComponent = ({ Maindata = [], data = [] }) => {

    const [currentPage, setCurrentPage] = useState(1)
    const recordsPerPage = 5;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = Maindata.slice(firstIndex, lastIndex);
    const nPages = Math.ceil(Maindata.length / recordsPerPage);
    const numbers = [...Array(nPages + 1).keys()].slice(1)


    const prevPage = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    const changePage = (id) => {
        setCurrentPage(id)
    }

    const nextPage = () => {
        if (currentPage !== nPages) {
            setCurrentPage(currentPage + 1)
        }
    }
    return (
        <div>
            <div className='main_data'>
                <table>
                    <thead>
                        <tr>
                            {data.map(({ name, field }) => (
                                <th key={field}>{name}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {records.map((item) => (
                            <tr>
                                <>
                                    {data.map(({ name, field }, i) => (
                                        <td key={field}>{item.device_action_item > 0 && i === 0 && <span className='notification'>{item.device_action_item}
                                            <span className='hiddenText'>{item.device_action_item_txt}</span></span>}
                                            {item[field]}</td>
                                    ))}
                                </>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
            <div className='pagination'>
                <span className='page_item'>
                    <a className='page_link' onClick={prevPage}>Prev</a>
                </span>
                {
                    numbers.map((n, i) => (
                        <span className={`num_item ${currentPage === n ? 'active' : ''}`} >
                            <a className='num_link' onClick={() => changePage(n)}>{n}</a>
                        </span>
                    ))
                }
                <span className='page_item'>
                    <a className='page_link' onClick={nextPage}>Next</a>
                </span>
            </div>
        </div>

    )
}

export default MainComponent