import React, { useState,useEffect } from 'react'


import Delete from './Delete'
import Filter from './Filter/Filter';
import { ToastContainer } from 'react-toastify';

import axios from 'axios'

import './list.css'

const ListBook = ({setAdd, setSelectedBook}) => {

    const [listData, setListData] = useState([])
    const [Del1, setDel1] = useState(false)
    const [deleteIndex, setDeleteIndex] = useState()
    const [result, setResult] = useState([])
    
    
    const handleEdit = (i) => {
        setAdd(true)
        setSelectedBook(listData[i])
    }


    const handleDelete1 = (index) => {
        setDel1(true)
        setDeleteIndex(index)
    }

    const handleList = () => {
        axios.get("http://localhost:555/books").then((res)=>{
            setListData(res?.data?.books)
            setResult(res?.data?.books)
            console.log(res)
        })
    }
    useEffect(()=>{
        handleList()
    },[])
    return(
        <div>
            <Filter listData={listData} setListData={setListData} result={result}/>
        <div className='main_list'>
            {listData.map((item,i) => {
                return <div  className='list_items'>
                    <h2 className='title'><a href='a' className='bottom_border'>{item.title}</a></h2>
                  <p className='author'><b>Author:{item.author}</b></p>
                  <p className='price'><b>Price:${item.price}</b></p>
                  <div className='footer'>
                    <span>
                    <button className='edit' onClick={() =>handleEdit(i)}><b>Edit</b></button>
                    </span>
                    <span>
                    <button className='delete' onClick={()=>handleDelete1(i)}><b>Delete</b></button>
                    </span>

                    {Del1 && deleteIndex === i && <Delete  handleList={handleList} item={item} setDeleteIndex={setDeleteIndex} setDel1={setDel1}/>}  
                    </div>
                </div>
            })}
                <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
        </div>
        </div> 
    )
}

export default ListBook