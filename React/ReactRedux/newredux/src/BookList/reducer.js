
const initialState = {
    bookList:[],
}

const booklistReducer = (state = initialState,action) => {
switch(action.type){
    case "SET_BOOKLIST":
        return {
            ...state,bookList:action.payload
        }
        default:
            return state;
}
}

export default booklistReducer;