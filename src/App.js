import React from 'react';
import './App.css';
import {
  BrowserRouter as Router, Route, Routes,
} from 'react-router-dom';
import Navigation from './components/routes/Navigation';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
import Home from './components/routes/Books';
import Categories from './components/routes/Authors';

function App() {
  const [books, setBooks] = React.useState([]);

  const handleAddBook = (newBook) => {
    setBooks((prevBooks) => [...prevBooks, newBook]);
  };

  const handleDeleteBook = (bookId) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== bookId));
  };

  return (
    <Router>
      <div>
        <div className="part1">
          <Home />
          <Navigation />
        </div>
        <Routes>
          <Route path="/" element={<BookList books={books} onDelete={handleDeleteBook} />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
        <BookForm onAdd={handleAddBook} />
      </div>
    </Router>
  );
}

export default App;
