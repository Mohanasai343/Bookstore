import React, { useState } from 'react'

import './bookStore.scss'
import BookList from './BookList'
import AddBook from './AddBook'

const BookStore = () => {

  const [activePage, setActivePage] = useState(0)


  return (
    <div className='container'>
      <div className='box'>
        <span className='btn'>
          {!activePage === true ?
          <button className='listPage' onClick={() => setActivePage(0)}>List</button> :  <button  className='listPage1' onClick={() => setActivePage(0)}>List</button>}
          {!activePage === true ?
          <button className='addPage1' onClick={() => setActivePage(1)}>Add</button> : <button className='addPage' onClick={() => setActivePage(1)}>Add</button>}
        </span>
      </div>
      {activePage ?
        <AddBook /> :
        <BookList />}
    </div>
  )
}

export default BookStore
