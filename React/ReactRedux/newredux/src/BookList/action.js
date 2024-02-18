import axios from 'axios';

export const getBooklist = () => dispatch => {
    axios.get("http://localhost:555/books").then(res => 
  dispatch ( {
        type:"SET_BOOKLIST",
        payload:res?.data?.books
    })
    )
    .catch(err => console.log(err))
  
}