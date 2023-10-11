import React from 'react';
import Book from './Book';
import Form from './Form';

const BookList = () => (
  <>
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Actions</th>
        </tr>
      </thead>
      <Book
        title="One punch"
        author="Rocky Balboa"
        button="Remove"
      />
      <Book title="way to rich" author="Don lee" button="Remove" />
    </table>
    <Form />
  </>
);

export default BookList;
