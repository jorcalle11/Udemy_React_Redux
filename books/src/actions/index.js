export const SELECT_BOOK = 'SELECT_BOOK'

export function selectBook(book) {
  console.log('selected the book ',book)
  return {
    type: SELECT_BOOK,
    payload: book
  }
}