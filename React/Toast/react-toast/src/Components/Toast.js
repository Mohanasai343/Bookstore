import React from 'react'
import { useState,useEffect } from 'react';
import  PropTypes  from 'prop-types';

import './Toast.css'

const Toast=(props)=>{

    Toast.defaultProps = {
        position: 'bottom-right'
    }
    
    Toast.propTypes = {
        toastList: PropTypes.array.isRequired,
        position: PropTypes.string
    }

    const {toastList,position} = props;

    const [list,setList] = useState(toastList)

    const deleteToast=(id)=>{
        const index = list.findIndex(e => e.id === id);
        list.splice(index, 1);
        setList([...list]);
    }

    useEffect(()=>{
        setList(toastList)
    },[toastList,list]);
    return(
        <>
        <div className={`notification-container ${position}`}>
            {list?.map((Toast,i)=>
                <div key={i} className={`notification toast ${position}`} style={{ backgroundColor: Toast.backgroundColor }}>
                <button onClick={() => deleteToast(Toast.id)}>
                    x
                </button>
                <div className='notification-image'>
                    <img src={Toast.icon} alt=''/>
                </div>
                <div>
                    <p className='notification-title'>{Toast.title}</p>
                    <p className='notification-message'>{Toast.description}</p>
                </div>
            </div>
            )}
        </div>
        </>
    )
}

export default Toast