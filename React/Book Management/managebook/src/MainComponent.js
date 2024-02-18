import React, { useState } from 'react'
import AddBook from './AddBook'
import ListBook from './ListBook'


import './mainComponent.css'

const MainComponent = () => {

    const [add, setAdd] = useState(true)
    const [list, setList] = useState(false)
    const [selectedBook, setSelectedBook] = useState()
   

    const handleAdd = () => {
        setAdd(true)
        setList(false)
    }    

    const handleList = () => {
        setList(true)
        setAdd(false)
    }


    return(
        <div className='main_div'>
                <h1>Book Management</h1>
                <div className='switch_div'>
                    {add ?
                <span className={!add?"add active":"add"} onClick={handleList}>List Book</span>:<span className='list'>List Book</span>}
                {list ?
                   <span className={add?"add active":"add"} onClick={handleAdd}>Add Book</span>:<span className='add1'>Add Book</span>}
                </div>
                {add ?
                   <div>
                    <AddBook selectedBook={selectedBook} setSelectedBook={setSelectedBook}/>
                   </div> : <div>
                        <ListBook setAdd={setAdd} setSelectedBook={setSelectedBook}/>
                    </div>}

            </div>
       
    )
}

export default MainComponent