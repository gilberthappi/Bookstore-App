/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import Navigation from './components/routes/Navigation';
import BookList from './components/BookList';
import Home from './components/routes/Books';
import Categories from './components/routes/Authors';

function App() {
  return (
    <Router>
      <div>
        <div className="part1">
          <Home />
          <Navigation />
        </div>
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
