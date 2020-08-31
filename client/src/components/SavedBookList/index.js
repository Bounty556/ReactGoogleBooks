import React from 'react';

import BookEntry from '../../components/BookEntry';

function BookList(props) {
  return (
    <div className='container'>
      {props.savedBookList ? <hr /> : <></>}
      {props.savedBookList ? (
        props.savedBookList.map((book, i) => {
          return <BookEntry {...book} checkSavedBooks={props.checkSavedBooks} key={i} />;
        })
      ) : (
        <></>
      )}
    </div>
  );
}

export default BookList;
