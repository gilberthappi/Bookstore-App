/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import { removeBook } from '../redux/books/booksSlice';

import 'react-circular-progressbar/dist/styles.css';

const BookIndividual = ({ book }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeBook(book.item_id));
  };

  return (
    <div>
      <div className="info-panel flex">
        <div className="info-content flex">
          <div className="info-content-details">
            <p className="type fontsty-normal montserrat">Literature</p>
            <h2 className="title fonststy-normal montserrat">{book.title}</h2>
            <p className="author fontsty-normal robot">
              Author:
              {book.author}
            </p>
          </div>
          <div className="buttons">
            <button className="comment fontsty-normal roboto" type="button">
              Comments
            </button>
            <button type="button" className="remove fontsty-normal roboto" onClick={handleDelete}>
              Delete
            </button>
            <button className="edit fontsty-normal roboto" type="button">
              Edit
            </button>
          </div>
        </div>
        <div className="separate">
          <div className="advance flex">
            <div className="circle">
              <CircularProgressbar value={44} />
            </div>
            <div className="advance-percent-completed">
              <p className="advance-percent fontsty-normal montserrat">44%</p>
              <p className="advance-completed fontsty-normal montserrat">Completed</p>
            </div>
          </div>

          <div className="chapter-container flex center">
            <div className="chapter-section">
              <p className="current-chapter fontsty-normal roboto">CURRENT CHAPTER</p>
              <p className="chapter fontsty-normal roboto">Chapter 1</p>
            </div>
            <div>
              <button className="button-update roboto" type="button">
                UPDATE PROGRESS
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

BookIndividual.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    item_id: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookIndividual;
