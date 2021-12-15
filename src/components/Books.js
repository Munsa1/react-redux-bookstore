import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooksList } from '../redux/Books/books';
import BookItem from './BookItem';

const Books = ({ bookList }) => (
  <ul className="books-list-section">
    {bookList.map((book) => (
      <BookItem key={book.id} book={book} />
    ))}
  </ul>
);

Books.propTypes = {
  bookList: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.string.isRequired,
    },
  )).isRequired,
};

export default Books;
