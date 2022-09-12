import React from 'react';

import useWindowSize from '../hooks/useWindowsSize';

import '../styles/header.css';

const Header = ({ isOpen, setIsOpen}) => {
  const size = useWindowSize();

  return (
    <header>
      <nav id='outer-container' className='flex flex-jc-sb'>
        <h1 className='header'>Alexis</h1>
        {/* Checking to see if size is less than 1025px */}
        {size.width < 1025 && (
          <div>
          </div>
        )}
        {size.width > 1025 && (
          <ul className={'desktop-menu'}>
            <li>
              <a href='#about'>About</a>
            </li>
            <li>
              <a href='#projects'>Projects</a>
            </li>
            <li>
              <a href='#contact'>Contact</a>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;