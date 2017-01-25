import React from 'react';
import { ListGroup } from 'react-bootstrap';
import BookListItem from './BookListItem';

const BookList = ({books,selectBook}) => {
  const renderBooks = () => (
    books.map(book => {
      return (
        <BookListItem
          key={book.title}
          book={book}
          selectBook={selectBook}/>
      )
    })
  )

  return (
    <ListGroup>
      {renderBooks()}
    </ListGroup>
  );
};

export default BookList;