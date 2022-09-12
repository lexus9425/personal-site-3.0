import React from 'react';
import useWindowSize from '../hooks/useWindowsSize'

import styles from '../styles/menu.module.css';

const Menu = ({ isOpen, setIsOpen }) => {
  const appliedStyles = isOpen
    ? styles.show + ' ' + styles.menu
    : styles.exit + ' ' + styles.menu;

  const size = useWindowSize();

  const fadeStyles = isOpen ? 'mobile-header fadeIn' : 'mobile-header';

  const closeModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {size.width < 1025 && (
        <div className={appliedStyles}>
          <ul className={fadeStyles}>
            <li onClick={closeModal}>
              <a href='#about'>About</a>
            </li>
            <li onClick={closeModal}>
              <a href='#projects'>Projects</a>
            </li>
            <li onClick={closeModal}>
              <a href='#contact'>Contact</a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Menu;