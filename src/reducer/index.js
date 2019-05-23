import { combineReducers } from "redux";
import BooksReducer from "./module/reducer_books";
import ActiveBook from "./reducer/reducer_active_books";
import Article from './reducer/article'

const rootReducer = combineReducers({
    books: BooksReducer,
    activeBook: ActiveBook,
    article: Article
});

export default rootReducer;
