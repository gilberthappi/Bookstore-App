import React from 'react';
import './App.css';
import {
  BrowserRouter as Router, Route, Routes,
} from 'react-router-dom';
import Navigation from './components/routes/Navigation';
import BookList from './components/BookList';
// import BookForm from './components/BookForm';
import Categories from './components/routes/Authors';
import './style.css';

function App() {
  const [books, setBooks] = React.useState([]);

  const handleDeleteBook = (bookId) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== bookId));
  };

  return (
    <Router>
      <div className="wrapper">
        <div className="blureffect">
          <div className="content-main">
            <div className="page center">
              <Navigation />
            </div>
            <Routes>
              <Route path="/" element={<BookList books={books} onDelete={handleDeleteBook} />} />
              <Route path="/categories" element={<Categories />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
