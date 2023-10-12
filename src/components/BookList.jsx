import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

import BookIndividual from './BookIndividual';
import BookForm from './BookForm';

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  const handleDelete = (bookId) => {
    dispatch(removeBook(bookId));
  };

  return (
    <div>
      {books.map((book) => (
        <BookIndividual key={book.item_id} book={book} onDelete={handleDelete} />
      ))}
      <BookForm />
    </div>

  );
};

export default BookList;
