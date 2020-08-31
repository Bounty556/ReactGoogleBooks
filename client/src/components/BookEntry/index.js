import React from 'react';

import './bookEntry.css';

function BookEntry(props) {
  return (
    <div className='container border border-dark book-box'>
      <div className='row d-flex justify-content-between'>
        <p className='lead'>Book Title</p>
        <div id='buttons'>
          <button>View</button>
          <button>Save</button>
        </div>
      </div>

      <div className='row'>
        <p className='lead author-text'>by Margaret Thatcher</p>
      </div>

      <div className='row'>
        <div className='clearFix'>
          <img className='float-left book-image' src='https://via.placeholder.com/150' alt='Book' />
          <p className='lead book-description'>
            This is a super long description of the book. This is a super long description of the
            book. This is a super long description of the book. This is a super long description of
            the book. This is a super long description of the book. This is a super long description
            of the book. This is a super long description of the book. This is a super long
            description of the book. This is a super long description of the book. This is a super
            long description of the book. This is a super long description of the book.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BookEntry;
