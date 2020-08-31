import React from 'react';

import Api from '../../util/api';

import './bookEntry.css';

function BookEntry(props) {
  const removeBook = () => {
    Api.deleteBook(props._id).then(() => {
      props.checkSavedBooks();
    });
  };

  const saveBook = () => {
    const book = {
      title: props.title,
      authors: props.authors,
      link: props.link,
      image: props.image,
      description: props.description
    };

    Api.addBook(book).then(() => {
      props.checkSavedBooks();
    });
  };

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
          {props._id ? (
            <button className='btn btn-light' onClick={removeBook}>
              Remove
            </button>
          ) : (
            <button className='btn btn-light' onClick={saveBook}>
              Save
            </button>
          )}
        </div>
      </div>

      <div className='row'>
        <p className='lead author-text'>{props.authors ? 'by ' + props.authors.join(', ') : 'No listed authors'}</p>
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
