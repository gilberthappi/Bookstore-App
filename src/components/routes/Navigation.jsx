/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';
import '../../style.css';

const Navigation = () => (
  <nav className="nav-container flex">
    <h1 className="title-app fontsty-normal montserrat">Bookstore</h1>
    <ul className="nav-list flex">
      <li className="flex montserrat">
        <Link className="link montserrat" to="/">BOOKS</Link>
      </li>
      <li>
        <Link className="link category-gray" to="/categories">CATEGORIES</Link>
      </li>
    </ul>
    <div className="log-in">
      <CgProfile className="icon" />
    </div>
  </nav>
);

export default Navigation;
