import React from 'react';

import './bookSearch.css';

function BookSearch() {
  const searchBook = event => {
    event.preventDefault();
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
