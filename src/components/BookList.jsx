import React from 'react';
import PropTypes from 'prop-types';
import BookIndividual from './BookIndividual';

const BookList = ({ books, onDelete }) => (
  <div>
    {books.map((book) => (
      <BookIndividual key={book.id} book={book} onDelete={onDelete} />
    ))}
  </div>
);

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default BookList;
