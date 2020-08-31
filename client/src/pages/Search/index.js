import React, { useState, useEffect } from 'react';

import Banner from '../../components/Banner';
import BookList from '../../components/BookList';
import BookSearch from '../../components/BookSearch';
import Navbar from '../../components/Navbar';

import Api from '../../util/api';

function Search() {
  const [books, setBooks] = useState(null);
  const [savedBooks, setSavedBooks] = useState(null);

  const checkSavedBooks = () => {
    Api.getBooks().then(results => {
      setSavedBooks(results.data);
    });
  };

  useEffect(() => {
    checkSavedBooks();
  }, [checkSavedBooks]);

  return (
    <div>
      <Navbar />
      <Banner />
      <BookSearch setBooks={setBooks} />
      <BookList bookList={books} savedBooks={savedBooks} checkSavedBooks={checkSavedBooks} />
    </div>
  );
}

export default Search;
