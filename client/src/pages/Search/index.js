import React from 'react';

import Banner from '../../components/Banner';
import BookSearch from '../../components/BookSearch';
import Navbar from '../../components/Navbar';

function Search() {
  return (
    <div>
      <Navbar />
      <Banner />
      <BookSearch />
    </div>
  );
}

export default Search;
