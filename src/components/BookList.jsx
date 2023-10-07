import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import BookIndividual from './BookIndividual';

const staticBooks = [
  {
    id: 1,
    title: 'Sample Book 1',
    author: 'Author 1',
  },
  {
    id: 2,
    title: 'Sample Book 2',
    author: 'Author 2',
  },
  {
    id: 3,
    title: 'Sample Book 3',
    author: 'Author 3',
  },
];

const BookList = ({ books, onDelete }) => (
  <div>
    {/* Render static books */}
    {staticBooks.map((book) => (
      <BookIndividual key={book.id} book={book} onDelete={onDelete} />
    ))}
    {/* Render dynamic books passed as a prop */}
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
