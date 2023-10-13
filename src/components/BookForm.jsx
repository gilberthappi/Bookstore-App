import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      title,
      author,
      item_id: Date.now().toString(),
      category: 'under construction',
    };

    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
  };

  return (
    <div className="form-container">
      <h3 className="form-title fontsty-normal montserrat">Add a new book</h3>
      <form className="form flex" onSubmit={handleSubmit}>
        <input
          className="book-form-title montserrat"
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="book-form-author montserrat"
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button className="form-button roboto" type="submit">Add a Book</button>
      </form>
    </div>
  );
};

export default BookForm;
