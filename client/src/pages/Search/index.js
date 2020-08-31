import React, { useState } from 'react';

import Banner from '../../components/Banner';
import BookList from '../../components/BookList';
import BookSearch from '../../components/BookSearch';
import Navbar from '../../components/Navbar';

function Search() {
  const [books, setBooks] = useState(null);

  return (
    <div>
      <Navbar />
      <Banner />
      <BookSearch setBooks={setBooks} />
      <BookList bookList={books} />
    </div>
  );
}

export default Search;
