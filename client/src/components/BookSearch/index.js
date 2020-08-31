import React, { useRef } from 'react';

import GoogleApi from '../../util/googleApi';

import './bookSearch.css';

function BookSearch(props) {
  const searchTerm = useRef(null);

  const searchBook = event => {
    event.preventDefault();
  
    const searchString = searchTerm.current.value;
    if (searchString.length > 0) {
      // Make the call to the Google Books API
      GoogleApi.searchBooks(searchString)
        .then(results => {
          // Set the books on the Search page to be our results
          props.setBooks(results.data.items);
        });
    }
  };

  return (
    <div className='container border border-dark' id='searchContainer'>
      <form>
        <div className='row'>
          <label htmlFor='bookSearch'>Book:</label>
        </div>
        <div className='row'>
          <div className='col-lg-9 col-md-10'>
            <input
              type='text'
              id='bookSearch'
              className='wideFit'
              placeholder='Harry Potter and the Chamber of Secrets'
              ref={searchTerm}
            />
          </div>
          <div className='col-lg-3 col-md-2'>
            <button type='submit' className='wideFit' onClick={searchBook}>
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default BookSearch;
