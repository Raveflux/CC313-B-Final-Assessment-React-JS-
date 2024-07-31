import React from 'react';

const Book = ({ book, index, toggleStatus }) => (
  <li>
    {index + 1}. {book.title} | {book.author} |{' '}
    {book.status === 'Checked Out' ? book.dueDate : 'N/A'} | {book.status}
    <button onClick={() => toggleStatus(index)}>Toggle Status</button>
  </li>
);

export default Book;
