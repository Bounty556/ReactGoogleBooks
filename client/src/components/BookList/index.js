import React from 'react';

import BookEntry from '../../components/BookEntry';

function BookList(props) {
  return (
    <div className='container'>
      <hr />
      <BookEntry />
    </div>
  );

  // return (
  //   <div className='container'>
  //     {props.bookList ? <hr /> : <></>}
  //     {props.bookList ? (
  //       props.bookList.map(book => (
  //         <div className='row'>
  //           <BookEntry {...book} />
  //         </div>
  //       ))
  //     ) : (
  //       <></>
  //     )}
  //   </div>
  // );
}

export default BookList;
