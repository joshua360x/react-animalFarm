import React from 'react';
import './Header.css';

function Header({ greeting }) {
  return <header className='header'>Welcome to the {greeting}s page</header>;
}

export default Header;
