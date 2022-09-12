import React from 'react';

import styles from '../styles/footer.module.css';
import Socials from './Socials';

const Footer = () => {
  return (
    <footer id='contact' className={styles.footer}>
      <div>
        <h1>Contact Me</h1>
        <div className='flex flex-jc-c email'>
          <a href='mailto:#'>lexus9425@gmail.com</a>
        </div>
        <Socials />
      </div>
    </footer>
  );
};

export default Footer;