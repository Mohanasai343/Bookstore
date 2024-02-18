import React from 'react'

import {  toast } from 'react-toastify';


import 'react-toastify/dist/ReactToastify.css'
import './Delete.css'


import axios from 'axios'



const Delete = ({handleList,item,setDel1, setDeleteIndex}) => {

    const handleCancel = () => {
        setDel1(false)
        setDeleteIndex()
    }

    const handleDelete = (id) => {

        axios.delete(`http://localhost:555/books/${id}`).then((res)=>{
        if(res.status === 200){
            toast.success('Deleted Successfully')
            handleList()
        }
        })
        setDeleteIndex()
        setDel1(false)
    }

    return(
        <div>
            <div className='conform_btn'>
                <p>Do You Want to Delete?</p>
                <div className='confirm_div'>
                <button onClick={handleCancel} className='cancel'><b>Cancel</b></button>
                <button onClick={()=>handleDelete(item._id)} className='confirm'><b>Confirm</b></button>
                </div>
            </div>
            <div>
             
                </div>
        </div>
    )
}

export default Delete