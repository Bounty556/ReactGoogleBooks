import React from 'react';

import './banner.css';

function Banner() {
  return (
    <div className='jumbotron'>
      <div className='container'>
        <div className='row'>
          <h1 className='display-4 text-center wide-fit'>Google Book Search</h1>
        </div>
        <div className='row'>
          <p className='lead text-center wide-fit'>
            Search for and Save books of interest!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
