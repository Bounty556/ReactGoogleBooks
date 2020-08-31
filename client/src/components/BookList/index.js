import React from 'react';

import BookEntry from '../../components/BookEntry';

function BookList(props) {
  return (
    <div className='container'>
      {props.bookList ? <hr /> : <></>}
      {props.bookList ? (
        props.bookList.map((book, i) => (
          <BookEntry
            authors={book.volumeInfo.authors}
            title={book.volumeInfo.title}
            description={book.volumeInfo.description}
            isFavorited={false}
            image={book.volumeInfo.imageLinks.thumbnail}
            link={book.volumeInfo.infoLink}
            key={i}
          />
        ))
      ) : (
        <></>
      )}
    </div>
  );
}

export default BookList;
