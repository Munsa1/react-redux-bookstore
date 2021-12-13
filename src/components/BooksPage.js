import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddNewBook from './AddNewBook';
import Books from './Books';

const BooksPage = () => {
  const bookList = [
    {
      booktitle: ' The Davincci Code',
      author: ' Dan Brown',
      category: ' Mystery',
      id: uuidv4(),
    },
  ];
  return (
    <div className="books">
      <Books bookList={bookList} />
      <AddNewBook />
    </div>
  );
};

export default BooksPage;
