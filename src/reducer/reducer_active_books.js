// State argument is not application state, only the state
// this reducer is responsible for
import books from './reducer_books'
export default function(state = books() , action) {
    console.log(state)
    switch (action.type) {
        case "BOOK_SELECTED":
            state = state.push(action.payload)
            return state;
    }

    return state;
}