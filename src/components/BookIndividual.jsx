import React from 'react';
import PropTypes from 'prop-types';

const BookIndividual = ({ book, onDelete }) => (
  <div className="info">
    <h2>{book.title}</h2>
    <p>
      Author:
      {book.author}
    </p>
    <button type="button" className="btn" onClick={() => onDelete(book.id)}>Delete</button>
  </div>
);

BookIndividual.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default BookIndividual;
