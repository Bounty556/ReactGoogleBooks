import React, { useState, useEffect } from 'react';

import Banner from '../../components/Banner';
import SavedBookList from '../../components/SavedBookList';
import Navbar from '../../components/Navbar';

import Api from '../../util/api';

function Saved() {
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
      <p className='lead text-center'>Saved Books</p>
      <SavedBookList savedBookList={savedBooks} checkSavedBooks={checkSavedBooks} />
    </div>
  );
}

export default Saved;
