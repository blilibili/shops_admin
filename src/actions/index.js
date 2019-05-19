export function selectBook(book) {
    // selectBook is an ActionCreator, it needs to return an action,
    // an object with a type property.
    return {
        type: "BOOK_SELECTED",
        payload: book
    };
}

export function anotherSelect(book) {
    return {
        type: "BOOK_Another_SELECTED",
        payload: book
    };
}