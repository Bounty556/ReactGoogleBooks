import React from 'react';

import Banner from '../../components/Banner';
import BookList from '../../components/BookList';
import BookSearch from '../../components/BookSearch';
import Navbar from '../../components/Navbar';

function Search() {
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
