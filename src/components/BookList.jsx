import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

import BookIndividual from './BookIndividual';
import AddBookButton from './AddBookButton';

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  const handleDelete = (bookId) => {
    dispatch(removeBook(bookId));
  };

  return (
    <div>
      {books.map((book) => (
        <div key={book.item_id}>
          <BookIndividual book={book} onDelete={handleDelete} />
        </div>
      ))}
      <AddBookButton />
    </div>
  );
};

export default BookList;
