import React, { useState } from 'react';
import Book from './Book';
import SearchFilter from './SearchFilter';


const AUTHORS = ['John', 'Jane', 'Mike', 'Lisa'];

const getRandomAuthor = () => {
  const randomIndex = Math.floor(Math.random() * AUTHORS.length);
  return AUTHORS[randomIndex];
};

const Books = () => {
  const initialBooks = [
    { title: 'Noli Me Tangere', author: getRandomAuthor(), dueDate: getRandomDate(), status: 'Available' },
    { title: 'El Filibusterismo', author: getRandomAuthor(), dueDate: null, status: 'Available' },
    { title: 'Dekada \'70', author: getRandomAuthor(), dueDate: getRandomDate(), status: 'Checked Out' },
    { title: 'The Woman Who Had Two Navels', author: getRandomAuthor(), dueDate: null, status: 'Available' },
    { title: 'Banaag at Sikat', author: getRandomAuthor(), dueDate: getRandomDate(), status: 'Checked Out' },
    { title: 'Mga Ibong Mandaragit', author: getRandomAuthor(), dueDate: null, status: 'Available' },
    { title: 'Crying Ladies', author: getRandomAuthor(), dueDate: getRandomDate(), status: 'Checked Out' },
    { title: 'Sa Mga Kuko ng Liwanag', author: getRandomAuthor(), dueDate: getRandomDate(), status: 'Checked Out' },
    { title: 'Si Amapola sa 65 na Kabanata', author: getRandomAuthor(), dueDate: getRandomDate(), status: 'Checked Out' },
    { title: 'Ang Mga Kaibigan ni Mama Susan', author: getRandomAuthor(), dueDate: null, status: 'Available' },
  ];

  const [books, setBooks] = useState(initialBooks);
  const [filteredBooks, setFilteredBooks] = useState(initialBooks);

  function getRandomDate() {
    const today = new Date();
    const randomDays = Math.floor(Math.random() * 30);
    const randomDate = new Date(today);
    randomDate.setDate(today.getDate() + randomDays);
    return randomDate.toDateString();
  }

  const toggleStatus = (index) => {
    const updatedBooks = filteredBooks.map((book, i) => {
      if (i === index) {
        return {
          ...book,
          status: book.status === 'Checked Out' ? 'Available' : 'Checked Out',
          dueDate: book.status === 'Checked Out' ? null : getRandomDate(),
        };
      }
      return book;
    });
    setBooks(updatedBooks);
    setFilteredBooks(updatedBooks);
  };

  return (
    <div className="books-container">
      <SearchFilter books={books} setFilteredBooks={setFilteredBooks} className="search-filter" />
      <h2>Book List</h2>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Title</th>
            <th>Author</th>
            <th>Due Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredBooks.map((book, index) => (
            <tr key={index} className={`book-item ${book.status === 'Checked Out' ? 'checked-out' : 'available'}`}>
              <td>{index + 1}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.dueDate || 'N/A'}</td>
              <td className={`book-status ${book.status === 'Checked Out' ? 'checked-out' : 'available'}`}>
                {book.status}
              </td>
              <td>
                <button onClick={() => toggleStatus(index)}>Toggle Status</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Books;
