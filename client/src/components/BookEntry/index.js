import React from 'react';

import './bookEntry.css';

function BookEntry(props) {
  return (
    <div className='container border border-dark book-box'>
      <div className='row d-flex justify-content-between'>
        <p className='lead'>{props.title}</p>
        <div id='buttons'>
          <a
            className='btn btn-light'
            href={props.link}
            target='_blank'
            rel='noopener noreferrer'
            role='button'
          >
            View
          </a>
          <button className='btn btn-light'>Save</button>
        </div>
      </div>

      <div className='row'>
        <p className='lead author-text'>by {props.authors.join(', ')}</p>
      </div>

      <div className='row'>
        <div className='clearFix'>
          <img className='float-left book-image' src={props.image} alt='Book' />
          <p className='lead book-description'>{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default BookEntry;
