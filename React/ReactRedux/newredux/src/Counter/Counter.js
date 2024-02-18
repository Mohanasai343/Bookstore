import React from "react";
import { decrement, increment } from "./action";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
    const dispatch = useDispatch()
    const value = useSelector((item) => item.counter)
    const books = useSelector(state => state.booklist)
    return(
        <div>
            <button onClick={() => dispatch(decrement())}>List</button>
            {value}
            <button onClick={() => dispatch(increment())}>Book</button>
            <ol>
                {books.bookList.map(item => <li>{item.price}</li>)}
            </ol>
        </div>
    )
}

export default Counter