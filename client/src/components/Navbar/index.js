import React from 'react';

function Navbar() {
  return (
    <nav className='navbar navbar-expand-sm navbar-light bg-light'>
      <span className='navbar-brand mb-0 h1'>
        Google Books
      </span>

      <ul className='navbar-nav'>
        <li className='nav-item active'>
          <a class='nav-link' href='/'>Search</a>
        </li>
        <li className='nav-item active'>
          <a class='nav-link' href='/Saved'>Saved</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
