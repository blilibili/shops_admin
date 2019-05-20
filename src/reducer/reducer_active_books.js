// State argument is not application state, only the state
// this reducer is responsible for
import books from './reducer_books'

export default function(state = books() , action) {
    switch (action.type) {
        case "BOOK_SELECTED":
            let tmp = state
            tmp.push({title:'test' , page:10})
            return tmp
    }

    return state;
}
