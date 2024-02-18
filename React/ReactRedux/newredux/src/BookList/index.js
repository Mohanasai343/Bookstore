import React, { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { getBooklist } from "./action";

const Booklist = () =>{


    const dispatch = useDispatch();
    const {bookList,data} = useSelector(state => state.booklist)
    useEffect(() => {
        dispatch(getBooklist());
    },[dispatch])
    console.log(data)
    return( <div>
        {bookList?.map(item =>
        <li>{item.author}</li>)}
    </div>
    )
}
export default Booklist;