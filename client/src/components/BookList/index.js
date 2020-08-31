import React from 'react';

import BookEntry from '../../components/BookEntry';

function BookList(props) {
  return (
    <div className='container'>
      {props.bookList && props.bookList.length > 0 ? <hr /> : <></>}
      {props.bookList && props.bookList.length > 0 ? (
        props.bookList.map((book, count) => {
          for (let i = 0; i < props.savedBooks.length; i++) {
            if (props.savedBooks[i].link === book.volumeInfo.infoLink) {
              return (
                <BookEntry
                  {...props.savedBooks[i]}
                  checkSavedBooks={props.checkSavedBooks}
                  key={count}
                />
              );
            }
          }
          return (
            <BookEntry
              authors={book.volumeInfo.authors}
              title={book.volumeInfo.title}
              description={book.volumeInfo.description}
              image={book.volumeInfo.imageLinks.thumbnail}
              link={book.volumeInfo.infoLink}
              checkSavedBooks={props.checkSavedBooks}
              key={count}
            />
          );
        })
      ) : (
        <></>
      )}
    </div>
  );
}

export default BookList;
