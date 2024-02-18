import React, { useEffect, useState } from 'react'

import axios from 'axios'

const BookList = () => {

    const [list, setList] = useState([])
    console.log(list)


    const handleData = () => {
       axios

      .get(`http://localhost:555/books`)
      .then((res) => setList(res?.data?.books))
      .catch((err) => console.log(err))
    };

    useEffect(()=>{
      handleData()
    },[])

  return (
    <div>
      {list.map((item)=>(
        <ul className='list_data'>
          <li>Title : {item.title}</li>
          <li>Author : {item.author}</li>
          <li>Price : ${item.price}</li>
        </ul>
      ))}
    </div>
  )
}

export default BookList
