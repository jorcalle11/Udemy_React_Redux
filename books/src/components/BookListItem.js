import React from 'react';
import { ListGroupItem } from 'react-bootstrap';

const BookListItem = ({book,selectBook}) => {
  return (
    <ListGroupItem onClick={() => selectBook(book)}>
      {book.title}
    </ListGroupItem>
  );
};

export default BookListItem;