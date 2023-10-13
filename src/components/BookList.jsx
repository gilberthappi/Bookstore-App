import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks, removeBook } from '../redux/books/booksSlice';

import BookIndividual from './BookIndividual';
import BookForm from './BookForm';

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const handleDelete = (bookId) => {
    dispatch(removeBook(bookId));
  };

  return (
    <div className="container">
      {(books ?? []).map((book) => (
        <BookIndividual key={book.item_id} book={book} onDelete={handleDelete} />
      ))}
      <BookForm />
    </div>
  );
};

export default BookList;
