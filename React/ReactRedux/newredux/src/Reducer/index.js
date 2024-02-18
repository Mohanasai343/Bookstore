import { combineReducers } from 'redux';
import counterReducer from '../Counter/reducer';
import booklistReducer from '../BookList/reducer';

export default combineReducers({

    counter:counterReducer,
    booklist: booklistReducer,
})