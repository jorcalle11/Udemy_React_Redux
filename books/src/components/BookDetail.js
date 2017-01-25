import React from 'react';
import { Alert } from 'react-bootstrap';

const BookDetail = ({activeBook}) => {
  if (!activeBook.title) {
    return <Alert bsStyle="warning" className="text-center">Selecciona un libro para empezar...</Alert>
  }

  return (
    <div>
      <h4>Detalles del libro: </h4>
      <p>Titulo: {activeBook.title}</p>
      <p>Paginas: {activeBook.pages}</p>
    </div>
  );
};

export default BookDetail;