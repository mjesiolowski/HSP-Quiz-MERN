import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div className="notFound">
    <p className="notFound__text text">There is nothing here.</p> <Link className="notFound__button link button" to="/">Go home</Link>
  </div>
);

export default NotFoundPage;
