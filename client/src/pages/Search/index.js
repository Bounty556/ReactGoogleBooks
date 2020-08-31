import React, { useEffect, useState } from 'react';

import Banner from '../../components/Banner';
import BookList from '../../components/BookList';
import BookSearch from '../../components/BookSearch';
import Navbar from '../../components/Navbar';

import GoogleApi from '../../util/googleApi';

function Search() {
  const [books, setBooks] = useState(null);

  useEffect(() => {
    GoogleApi.searchBooks('Harry').then(results => {
      console.log(results);
    });
  }, []);

  return (
    <div>
      <Navbar />
      <Banner />
      <BookSearch />
      <BookList />
    </div>
  );
}

export default Search;
