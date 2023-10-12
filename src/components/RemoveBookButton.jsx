import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const RemoveBookButton = ({ bookId, onDelete }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeBook(bookId));
    onDelete(bookId);
  };

  return (
    <button type="button" className="btn" onClick={handleDelete}>
      Delete
    </button>
  );
};

RemoveBookButton.propTypes = {
  bookId: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default RemoveBookButton;
