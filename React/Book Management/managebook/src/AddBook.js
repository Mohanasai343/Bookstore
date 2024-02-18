import React,{useEffect, useState} from 'react'

import { ToastContainer, toast } from 'react-toastify';

import './add.css'
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'

const AddBook = ({selectedBook, setSelectedBook}) => {

    const [name, setName] = useState()
    const [author, setAuthor] = useState("")
    const [price, setPrice] = useState("")


    useEffect(() =>{
        setName(selectedBook?.title)
        setAuthor(selectedBook?.author)
        setPrice(selectedBook?.price)
    },[selectedBook])

    const handlename = (e) => {
        setName(e.target.value)
    }
    
    const handleauthor = (e) => {
        setAuthor(e.target.value)
    }

    const handleprice = (e) => {
        setPrice(e.target.value)
    }


    const handleSubmit = () => {
        setSelectedBook()
        setName("")
        setAuthor("")
        setPrice("")
       const obj = {
        title:name,
        author,
        price,
       }
if(selectedBook){
    axios.put(`http://localhost:555/books/${selectedBook?._id}`,obj).then((res)=>{
            toast.success('Updated Successfully')
            console.log(res)
}).catch(err => {
   toast(err)
})
}else{
    axios.post("http://localhost:555/books",obj).then((res)=>{
            toast.success('Submitted Successfully')
        console.log(res)
    }).catch(err => {
       toast(err)
    })
}
    }

    return(
        <div>
           <div className='content'>
            <div className='inputs'>
                <p>
                <b>Book Name</b>
                <input type='text' className='name'   onChange={handlename} value={ name}/>
                </p>

                <p>
                <b>Book Author</b>
                <input type='text' className='name'  onChange={handleauthor} value={ author}/>
                </p>
                
                <p>
                <b>Book Price</b>
                <input type='text' className='name'  onChange={handleprice} value={ price} maxLength="4"/>
                </p>
                </div>
           </div>

           <div className='submit_div'>
                    <button className='submit' disabled={!name||!author||!price} onClick={handleSubmit}>Submit</button>
                </div>
                <div>
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

export default AddBook